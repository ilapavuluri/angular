

export interface MenuItem{
	id: number
	name:String
	cost:number
	quantity:number
}

export interface OrderDetails{
	itemName:String
	itemDescription:String
	cost:number
	customerName:String
	customerDescription:String

}

export interface UserInfo{
	userid:number
	password:String
	username:String

}

export interface LoginResponse{
	username:string
	token:string
}
	