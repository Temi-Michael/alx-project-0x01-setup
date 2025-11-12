import { UserProps } from '@/interfaces'
// import Image from 'next/image'

const UserCard: React.FC<UserProps> = ({ name, username}) => {
    return (
        <div className='flex flex-col text-center'>
            <div className='bg-blue-200 w-full rounded-lg p-4 gap-3'>
                <h2 className='font-semibold'>{name}</h2>
                <h2 className='font-medium'>@{username}</h2>
            </div>

        </div>
    )
}

export default UserCard