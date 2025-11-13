import { UserData, UserModalProps } from '@/interfaces'
import React, { useState } from 'react'

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        userId: 1,
        name: "",
        username: "",
        email: "",
        image: `https://robohash.org/`
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClose = () => {
        onClose()
        setUser({
            userId: 1,
            name: "",
            username: "",
            email: "",
            image: `https://robohash.org/`
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(user)
        onClose()
    }

    return (
        <div className='flex fixed inset-0 bg-linear-to-b from-blue-600 to-purple-600 justify-center items-center '>
            <div className='bg-white rounded-lg p-8 shadow-lg w-full max-w-md'>
                <h1 className='font-semibold font-mono text-3xl'>Add New User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 justify-around gap-3'>
                        <div className='mb-2'>
                            <label htmlFor="userId" className=''>UserID</label>
                            <input type="text" name="userId" id="userId" className='w-full border-2 border-solid border-gray-400 rounded-lg pl-2 ' placeholder='Enter ID' value={user.userId} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="username" className='mb-1'>Username</label>
                            <input type="text" name="username" id="username" className='w-full border-2 border-solid border-gray-400 rounded-lg pl-2 ' value={user.username} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className='block mb-1'>Name</label>
                        <input type="text" name="name" id="name" className='w-full border-2 border-solid border-gray-400 rounded-lg pl-2 mb-1 ' value={user.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email" className='block mb-2'>Email</label>
                        <input type="email" name="email" id="email" className='w-full border-2 border-solid border-gray-400 rounded-lg pl-2 mb-1 ' value={user.email} onChange={handleChange} required />
                    </div>
                    <div className='flex justify-between mt-4'>
                        <button type='button' aria-label='button' className='font-medium text-gray-700' onClick={handleClose}>Close</button>
                        <button type='submit' className='bg-green-600 hover:bg-green-400 font-semibold rounded-lg p-1.5'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UserModal