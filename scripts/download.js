function downloadAllSTL() {
  // Using try-catch to handle potential errors
  try {
    const link = document.createElement('a');
    link.href = 'assets/stl-files/throwing_ee_stl_files.zip';  // Updated to correct path
    link.download = 'throwing_ee_stl_files.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading STL files:', error);
    alert('Error downloading STL files. Please try again later.');
  }
}

function downloadCADFiles() {
  // Using try-catch to handle potential errors
  try {
    const link = document.createElement('a');
    link.href = 'assets/stl-files/throwing_ee_cad_files.zip';  // Updated to match STL path
    link.download = 'throwing_ee_cad_files.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading CAD files:', error);
    alert('Error downloading CAD files. Please try again later.');
  }
} 