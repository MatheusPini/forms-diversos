// import { IconPerson } from "../assets/icons/person"
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, Controller, FormProvider } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import * as yup from "yup"
import { Tabs } from "flowbite";
import { InputTextField } from '../components/inputs/text';
import { IconPerson } from '../assets/icons/person';
import { EmailField } from '../components/inputs/email';
import { PhoneField } from '../components/inputs/phone';
import { BtnSubmit } from '../components/buttons/submit';
import { TabComponent } from '../components/tab';
interface IForm1 {
    first_name: string
    last_name: string
    email: string
    phone: string
}
export const Form1 = () => {
    const onSubmit: SubmitHandler<IForm1> = (data) => {
        console.log(data)
    }

    const schema = yup
        .object({
            first_name: yup.string().required("Primeiro nome obrigatório"),
            last_name: yup.string().required("Último nome obrigatório"),
            email: yup.string().email("E-mail precisa ser válido").required("E-mail é obrigatório"),
            phone: yup.string().required("Telefone é obrigatório"),
        })
        .required()
    const methods = useForm<IForm1>({
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
        },
        resolver: yupResolver(schema)
    })
    return (
        <div className="p-4 sm:ml-64">
            <FormProvider {...methods}>

                <form onSubmit={methods.handleSubmit(onSubmit)} method="POST">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <InputTextField icon={<IconPerson />} label='Nome' name='first_name' errorMessage={methods.formState?.errors.first_name?.message} placeholder='Nome . . .' />
                        </div>
                        <div>
                            <InputTextField label='Sobrenome' name='last_name' errorMessage={methods.formState?.errors.last_name?.message} placeholder='Sobrenome . . .' />
                        </div>
                        <div>
                            <EmailField label='E-mail' name='email' placeholder='usuario@teste.com' errorMessage={methods.formState?.errors.email?.message} />
                        </div>
                        <div>
                            <PhoneField label='N° de Telefone' name='phone' errorMessage={methods.formState?.errors.phone?.message} />
                        </div>
                    </div>

                    <TabComponent />
                    <BtnSubmit label='Submeter' type='submit' />
                </form>
            </FormProvider>
        </div>
    )
}
