import tree from '../data/tree.json';
import measurements from '../data/measurements.json'; 
    

export const GetTreeCompany = async () => {
  try {
    return tree;
   } catch (error) {
     console.error(error.message)
   }    
 };

 
export const GetMeasurerById= async (id) => {
  try {
    return measurements.filter((measurement) => measurement.node.id === parseInt(id));
  } catch (error) {
      console.error(error.message)
  }    
};
 

export const GetMeasurements = (id) => {
  try {
   
    return  measurements.filter((measurement) => measurement.medidores.some( (elem) => elem.id === parseInt(id)))[0].medidores.filter(elem => elem.id === parseInt(id))[0];

  } catch (error) {
      console.error(error.message)
  }    
};