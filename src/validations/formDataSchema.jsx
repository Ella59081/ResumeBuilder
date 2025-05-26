import * as Yup from "yup"

export const detailsSchema = Yup.object().shape({
  FirstName: Yup.string().required("This field is required"),
  l_name: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  
});
