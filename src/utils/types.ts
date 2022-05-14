export type UUID = string

export type Role = 'user' | 'admin' | 'pro'

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type Category = 'robotics' | 'space' | 'brain' | 'animals'

export type ForfaitType = {
    emplacement: "terre" | "lune" | "univers"
    duration: "1 mois" | "6 mois" | "12 mois"
}

export type Header = {
    Authorization?: string,
    jwtToken?: string,
    "Content-Type"?: string,
}

export type User = {
    id : UUID,
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    avatar: string,
}

export type Data = {
    id : UUID,
    title: string,
    description: string,
    image: string,
    user_id: string,
    category: Category,
}

export type SmallUser = {
    id : UUID,
    firstname: string,
    lastname: string,
    username: string,
    email: string | null,
    avatar: string,
}

export type ErrorAPI = {
    err?: string,
    error_code?: string,
    message?: string,
    name?: string,
}

export type SuccessResult = {
    success?: boolean,
}

export type ResetPasswordProps = {
    email: string
    password: string
    confirm_password: string
    code: string
}

export type ResultSendCodeConfirmation = {
    success: boolean,
    exist: boolean,
}

export type ResultJwt = {
    access_token: string
    refresh_token: string
    success: boolean,
}

export type SignUpParams = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirm_password: string,
}


export type Column = {
    id: string,
    numeric: boolean,
    disablePadding: boolean,
    label: string
  }

export type TypeInput = "text" | "password" | "file" | "number" | "password" | "phone" | "date" | "email"
