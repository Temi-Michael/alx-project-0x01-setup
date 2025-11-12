import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header'
import { UserProps } from '@/interfaces'

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    console.log(posts)
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className='grid grid-cols-2 m-auto gap-2'>
                {
                    posts.map(({ id, name, username } : UserProps) => (
                        <UserCard key={id} id={id} name={name} username={username} />
                    ))
                }
            </main>
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