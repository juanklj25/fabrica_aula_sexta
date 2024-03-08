'use client'
import Input from "@/components/Input"
import { cepSchema } from "@/components/zod"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

export default function Home() {
  const { register, 
    handleSubmit,
    getValues,
    setValue, 
    formState:
    {errors},} = useForm({
      resolver : zodResolver(cepSchema),
    })

    const onSubmit = (data) => {
      console.log(data)
    }
    const handleBlur = () => {
      fetch(`https://viacep.com.br/ws/${getValues('cep')}/json/`)
      .then((response)=> response.json())
      .then((data) =>{
        setValue('rua',data.logradouro)
        setValue('bairro',data.bairro)
        setValue('cidade',data.localidade)
        setValue('estado',data.uf)
      })
      .catch((erro)=>console.error(error))
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <h1 className="text-3x1 text-white font-bold">formulario de endereço</h1>
      <form 
      className="flex flex-col py-4 w-1/3 space-y-4" onSubmit={handleSubmit(onSubmit)} >
        <Input id="cep" type="text" label = "CEP" register = {register} error={errors.cep} onBlur={handleBlur}/>
        <Input id="rua" type="text" label = "Rua" register = {register} error={errors.rua} onBlur={handleBlur}/>
        <Input id="numero" type="number" label = "Numero" register = {register} error={errors.numero}/>
        <Input id="bairro" type="text" label = "Bairro" register = {register} error={errors.bairro}/>
        <Input id="cidade" type="text" label = "Cidade" register = {register} error={errors.cidade}/>
        <Input id="estado" type="text "label = "Estado" register = {register} error={errors.estado}/>
        <button 
        type="submit"
        className="bg-blue-500 text-white font-bold rounded-md p-2">enviar</button>
      </form>
    </main>
  );
}
