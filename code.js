function testFunction(event){
  console.log(event.charCode);
  console.log("TEST!");
  if ( event.charCode == "13"){
    event.currentTarget.form.reset();
  }
  return (event.charCode)
}
