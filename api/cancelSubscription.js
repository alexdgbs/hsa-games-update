import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: envFile });

import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Verificar el método de la solicitud
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }
  
  const { subscriptionId } = req.body; // Obtener el ID de la suscripción del cuerpo de la solicitud
  if (!subscriptionId) {
    return res.status(400).json({ message: 'El ID de la suscripción es requerido.' });
  }

  try {
    // Hacer la solicitud para cancelar la suscripción
    const response = await fetch(`https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionId}/cancel`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${await getAccessToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ reason: 'Cancelación de la suscripción' })
    });
    
    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      const errorData = await response.json(); // Obtener datos del error
      throw new Error(`Error al cancelar la suscripción: ${errorData.message || 'Desconocido'}`);
    }
    
    res.status(200).json({ message: 'Suscripción cancelada con éxito' }); // Respuesta exitosa
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error al cancelar la suscripción' }); // Manejo de errores
  }
}

// Función para obtener el token de acceso de PayPal
async function getAccessToken() {
  const response = await fetch('https://api.sandbox.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });
  
  if (!response.ok) {
    const errorData = await response.json(); // Obtener datos del error
    throw new Error(`Error al obtener el token de acceso: ${errorData.message || 'Desconocido'}`);
  }
  
  const data = await response.json(); // Obtener el token de acceso
  return data.access_token; // Retornar el token
}

