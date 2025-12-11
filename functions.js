export const email_radom_generation = () => {
   return Math.round(Math.random() * 10000).toString(14)
}

export const cpf_radom_generation = () => {
   return Math.round(Math.random() * 100000000000000).toString()
}

export const rg_radom_generation = () => {
   return Math.round(Math.random() * 100000000000000).toString()
}