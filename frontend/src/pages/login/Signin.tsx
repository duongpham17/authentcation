import { useAppDispatch, useAppSelector } from '@redux/hooks/useRedux';
import Authentication from '@redux/actions/authentications';
import useForm from '@hooks/useForm';
import Input from '@components/inputs/Style1';
import Button from '@components/buttons/Style1';
import Text from '@components/texts/Style1';

interface Validation {
    email?: string,
    code?: string,
}

const validation = (values: Validation) => {
    let errors: Validation = {};

    const check = (key: any) => key in values;

    if(check("email")){
        if(!values.email) {
            errors.email = "required";
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = "Invalid email address"
        }
    }
    return errors
}

const Signin = () => {
    
    const dispatch = useAppDispatch();

    const {status, errors} = useAppSelector(state => state.authentications);

    const initalState = { email: "", code: ""};

    const {values, onChange, onSubmit, loading, validationErrors} = useForm(initalState, callback, validation);

    async function callback(){
      if(status.login === "sent") return await dispatch(Authentication.code(values.email, values.code)); 
      await dispatch(Authentication.login(values.email));
    };

    return (
    <div>
        {
          status.login === "sent"
          ?
          <form onSubmit={onSubmit}>
            <p>Check your email for the code</p>

            <Input label1="" placeholder="..." name="code" value={values.code} onChange={onChange} />

            {errors.code && <Text message="Incorrect code, try again" color="red" />}
            <br/>

            <Button type="submit" label1={<span>&#x2192;</span>} loading={loading} color="main" />
          </form>
          :
          <form onSubmit={onSubmit}>
            <Input label1="Email address" error={validationErrors.email} placeholder="..." name="email" value={values.email} onChange={onChange} />
            
            <br/>
            {status.login && <Text message={"Email does not exist, please sign up."} color='red'/>}
            <br/>
            
            <Button type="submit" label1={<span>&#x2192;</span>}loading={loading} color="main" />
          </form>
        }
    </div>
  )
}

export default Signin