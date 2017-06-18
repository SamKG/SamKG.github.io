function testFunction(event){
  if ( event.charCode == "13"){
    event.currentTarget.form.reset();
  }
  return (event.charCode)
}
