import z from 'zod'

export const cepSchema = z.object({
    cep: z.string().min(8, 'cep deve ter no minimo 8 dígitos'),
    rua: z.string().min(1, 'esse campo e obrigatorio'),
    numero: z.string().min(1, 'esse campo e obrigatorio'),
    bairro: z.string().min(1, 'esse campo e obrigatorio'),
    cidade: z.string().min(1, 'esse campo e obrigatorio'),
    estado: z.string().min(1, 'esse campo e obrigatorio'),

})