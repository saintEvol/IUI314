import type { pageQueryParam } from '@/types/base/apis'

export interface ClientUserInformation {
  id?: number
  user_name?: string
  sex?: string
  nickname?: string
  password?: string
  phone?: string
  email?: string
  status?: string
  comment?: string
}

export interface ClientUserQueryParam extends pageQueryParam {
  user_name?: string
  user_id?: number
  // phone_num?: string
  // user_status?: string
  // status?: string
}
