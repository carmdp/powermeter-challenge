import instanceApi from '../config/Axios';
    

export const GetTreeCompany = async () => {
  try {
    let rta = instanceApi.get('/measurers/').then((res) => console.log(res.data));

     return  instanceApi.get('/demo/hierarchy/tree/').then((res) => res.data);
   } catch (error) {
     console.error(error.message)
   }    
 };

 
export const GetMeasurerById= async (params) => {
  try {
      return instanceApi.get(`/demo/meters/power/instant/?filter=${params}`).then((res) => res.data);
  } catch (error) {
      console.error(error.message)
  }    
};
 