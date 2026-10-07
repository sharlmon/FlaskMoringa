from fastapi import APIRouter,status,Request,HTTPException
from pydantic import BaseModel,EmailStr


router=APIRouter()

from app import prisma

class MemberSchema(BaseModel):
    name:str
    email:EmailStr
    password:str


@router.post("/sign-up",status_code=status.HTTP_201_CREATED)
async def sign_up(payload:MemberSchema):
    #data validation
    print(payload)

    existing=await prisma.member.find_unique(where={"email":payload.email})

    if existing:
        raise HTTPException(status_code=400,detail="Email alredy in use")

    async with prisma.tx() as tx:
          member=await tx.member.create(
               data={"name":payload.name,"email":payload.email}
          )
          member_password=await tx.member_password.create(data={
               "member_id":member.id,
               "password":payload.password
          })

    return member
    
   
   