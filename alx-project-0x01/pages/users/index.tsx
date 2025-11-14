import UserCard from '@/components/common/UserCard'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { useState } from 'react'
import UserModal from '@/components/common/UserModal'
import { UserData } from '@/interfaces'

const Users: React.FC<{ posts: UserData[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [users, setUsers] = useState<UserData[]>(posts);
    // console.log(posts)

    const handleAddUser = (newUser: UserData) => {
        setUsers((prevUser) => [...prevUser, newUser]);
    }
    return (
        <div className='flex flex-col bg-linear-to-l from-gray-600 to-blue-500'>
            <Header />
            <div className='flex justify-end-safe m-5'>
                <button onClick={() => setModalOpen(true)} className=" bg-linear-to-r from-gray-600 to-purple-500 font-semibold w-fit px-4 py-2 rounded-lg text-gray-200">Add User</button>
            </div>
            <main className='grid grid-cols-2 m-auto py-10 gap-5'>
                {
                    posts.map(({ userId, name, username, email }: UserData) => (
                        <UserCard key={userId} id={userId} name={name} email={email} username={username} />
                    ))
                }
            </main>
            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
            )}
            <Footer />
        </div>
    )
}


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;