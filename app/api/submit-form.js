export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body;
  
      // Do something with the form data (e.g., store it in a database)
      console.log(formData);
  
      // Respond with a success message
      res.status(200).json({ message: 'Form data submitted successfully!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  