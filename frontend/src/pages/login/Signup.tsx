import { useAppDispatch, useAppSelector } from '@redux/hooks/useRedux';
import Authentication from '@redux/actions/authentications';
import useForm from '@hooks/useForm';
import Input from '@components/inputs/Style1';
import Button from '@components/buttons/Style1';
import Option from '@components/options/Style1';
import Text from '@components/texts/Style1';

interface Validation {
    email?: string,
    code?: string,
    name?: string,
}

const validation = (values: Validation) => {
    let errors: Validation = {};

    const check = (key: any) => key in values;

    if(check("name")){
        if(!values.name) {
            errors.name = "required";
        }
        else if(values.name.length <= 3){
            errors.email = "Invalid email address"
        }
    }

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

const Signup = () => {
    
    const dispatch = useAppDispatch();

    const {status, errors} = useAppSelector(state => state.authentications);

    const initalState = { email: "", code: "", name: "", title: "portfolio manager"};

    const {values, onChange, onSubmit, loading, validationErrors} = useForm(initalState, callback, validation);

    async function callback(){
      if(status.signup === "sent") return await dispatch(Authentication.code(values.email, values.code));
      await dispatch(Authentication.signup(values));
    };

  return (
    <div>
      {
          status.signup === "sent"
          ?
          <form onSubmit={onSubmit}>
              <p>Check your email for the code</p>

              <Input label1="" placeholder="Enter code here" name="code" value={values.code} onChange={onChange} />
              <br/>
              {errors.code && <Text message="Incorrect code, try again." color='red' />}
              <br/>

              <Button type="submit" label1={<span>&#x2192;</span>} loading={loading} color="main" />
          </form>
          :
          <form onSubmit={onSubmit}>
              <Input label1="Full Name" error={validationErrors.name} placeholder="Enter your full name" name="name" value={values.name} onChange={onChange} />

              <Input label1="Email address" error={validationErrors.email} placeholder="Enter your email address" name="email" value={values.email} onChange={onChange} />

              <Option label1="Role" options={["Portfolio Company", "Fund Manager", "Advisor"]} />

              <br/>
              {status.signup && <Text message="Email already exist, please login instead" color='red' />}
              <br/>

              <Button type="submit" label1={<span>&#x2192;</span>}loading={loading} color="main" />
          </form>
      }
    </div>
  )
}

export default Signup