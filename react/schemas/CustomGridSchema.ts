export const CustomGridSchema={
  title:"Grilla Cutsom",
  type:"object",
  properties:{
    gridType:{
      title: "Tipo de grilla",
      type: "number",
      enum:[1,2,3,4,5,6,7,8,9,10,11,12]
    }
  }
}
