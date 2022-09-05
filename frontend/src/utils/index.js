import axios from 'axios';

export const handleImage = async (image) => {
  const data = new FormData()

  data.append('file', image)
  data.append('upload_preset', 'pizzaApp')
  data.append('cloud_name', 'dlgcq1hg1')

  if(!image) return;
  
  try {
    return await axios.post("https://api.cloudinary.com/v1_1/dlgcq1hg1/image/upload", data);
  } catch(err) {
    return err
  }
}

