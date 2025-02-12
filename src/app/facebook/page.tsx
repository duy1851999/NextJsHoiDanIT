'use client'
import { useRouter } from "next/navigation"
import { Button } from 'react-bootstrap'
const FaceBook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            FaceBook Page
            <div>
                <Button variant='success'>Hoi Dan IT</Button>
                <Button onClick={() => handleBtn()}>Back Home</Button>
            </div>
        </div>
    )
}
export default FaceBook;