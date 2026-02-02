export const loginUser=async(email,password)=>{
  if(email && password){
    return{
      id:"u123",
      email,
      role:"participant"
    }
  }
  throw new Error("Invalid credentials")
}
