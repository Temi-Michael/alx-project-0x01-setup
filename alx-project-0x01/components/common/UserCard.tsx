import { UserProps } from '@/interfaces'
import Image from 'next/image'
import Button from './Button'

const UserCard: React.FC<UserProps> = ({ name, username, email }) => {
    return (
        <div className='flex flex-col text-center'>
            <div className='bg-gray-700 w-full rounded-lg p-4 gap-3'>
                <Image src={`https://robohash.org/${name.toLowerCase().split(' ').join('')}`} alt={name} width={200} height={200} className='rounded-full border-solid border-2 border-amber-500' />
                {/* <h2 className='font-semibold text-blue-500'>{name}</h2> */}
                <h2 className='font-medium text-amber-700'>@{username}</h2>
                <h3 className='text-sm text-gray-500'>{email}</h3>
                <Button text={name} />
            </div>

        </div>
    )
}

export default UserCard