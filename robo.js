import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';
import {email_radom_generation, cpf_radom_generation, rg_radom_generation } from './functions.js'

export const options = {
    stages : [
     { duration : '30s' , target : 50 },
     { duration : '1m' , target : 100 },
     { duration : '1m' , target : 200 },
     { duration : '30s' , target : 0 },
    ],
    thresholds : {
    'http_req_failed': ['rate<0.01'],
    'http_req_duration': ['p(95)<1000'],
    }
}

const params = {
    headers : {
        'Content-Type' : 'application/json'
    }
}

export default function main(){
    let cpf = cpf_radom_generation()

    let rg = rg_radom_generation()

    let email = email_radom_generation()

    const payload = JSON.stringify({

    "full_name": "João da Silva",
    "cpf": cpf,
    "phone_number": "(11) 98888-7777",
    "email": email,
    "confirm_email": email,
    "state": "São Paulo",
    "city": "São Paulo",
    "mother_full_name": "Maria da Silva",
    "father_full_name": "Carlos da Silva",
    "birth_date": "2003-05-12",
    "nationality": "Brasileira",
    "rg": rg,
    "issuing_authority": "SSP-SP",
    "rg_issue_date": "2018-09-21",
    "address": "Rua Exemplo",
    "address_number": "123",
    "address_complement": "Apto 45",
    "neighborhood": "Centro",
    "postal_code": "01001-000",
    "ethnic_group": "Pardo",
    "race": "Pardo",
    "marital_status": "Solteiro",
    "gender": "Masculino",
    "sexual_orientation": "Heterossexual",
    "receives_benefits": "Não",
    "school_type": "Pública",
    "education_level": "Ensino Médio Completo",
    "profession": "Auxiliar Administrativo",
    "household_income": "2500",
    "employment_status": "Empregado",
    "family_members": "4",
    "working_family_members": "2",
    "disability": "Nenhuma",
    "registration_location": "Sede Central",
    "study_shift": "Noturno",
    "modality": "Presencial",
    "created_at": "2025-01-01",
    "reference_to_cpf": "",
    "reference_to_address": "",
    "reference_to_scholarship": "",
    "status": "Em análise",
    "reason": "", // somente caso a incrição seja regeitada
    "registration": "true",
    "enrollment_confirmed": "false",
    "request_benefit": "false",
    "bank": "Nubank",
    "agency_number": "0001",
    "agency_digit": "0",
    "bank_account": "12345678",
    "bank_digit": "9"
    })

    const url = 'https://calculadora-media-enem.vercel.app/'

    const res = http.post(url,payload,params)
    check(res, {'status 200': res => res.status === 200 })
    sleep(1)
}