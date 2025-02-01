export const downloadSTLFile = (fileName) => {
  const fileUrl = `assets/stl-files/${fileName}`;
  
  fetch(fileUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('File not found');
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error downloading file:', error);
      alert('Error downloading file. Please try again later.');
    });
}; 