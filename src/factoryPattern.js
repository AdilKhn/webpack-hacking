export const actionCreator = (name = 'homer', action = "Something", method) => {

 return  method ? 
    {
     name,
      action: action || "Something",
      method
    }
    :
   {
     name,
     action: action || "Something Generic"
   }
};


export const actionFactory = (ac) => {
  const method = function () {
    console.log('My Action has a name: ', this.name);
    console.log('My Action has a action: ', this.action);
  }
  return function() {
     return actionCreator("Lucy", "FIND_LUCY", method);
  };
}
