const Footer: React.FC = () => {
    return (
        <div>
            <footer className="bg-blue-600 text-white text-center py-4 mt-auto">
                <p>&copy; {new Date().getFullYear()} Daily Contents. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer;