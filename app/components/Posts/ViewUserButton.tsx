"use client"
//jadi bisa pake alert, onclick, handler

interface ViewUserButtonProps {
    userId: number
}
//dikirim dari variabel diatas dikirim dari bag page dimana di passing userid dengan isi dari api yg di fecth di page

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => alert(`user id: ${userId}`); //buat dapet user id ngambil dari properti diatas yg dilempar dari depan dimana dia punya interface
    return (
        <>
        <button onClick={handleClick} >Lihat User</button>
        </>
    )
}

export default ViewUserButton