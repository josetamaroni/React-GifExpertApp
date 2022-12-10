// El objeto al menos debe tener una propiedad
// const objeto = {
//     title: '',
//     text:'',
//     url:'',
//     files: [file] // puedo compartir más de un archivo
// }
export const shareGifs = (objeto) => {
  if (navigator.share) {
    navigator
        .share(objeto)
        .then(()=> console.log('Successful share'))
        .catch(err => alert('Does not support sharing', err));
  } else {
    alert('Does not support sharing')
    console.log('Does not support sharing')
  }
}
