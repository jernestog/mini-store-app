import Link from "next/link"


export const Header = () => {
    return (
        <header className="w-full h-full flex justify-between items-center p-2">
            <div className="w-full h-10 flex cursor-pointer">
                <Link href={'/'}>
                <span className="font-extrabold text-2xl text-black">
                    mini-store
                </span>
                </Link>
            </div>
            <div className="flex p-2 ">
                <Link href={"/cart"}>
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 512 512"><title>Cart SVG Icon</title><path fill="#000000" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32"/></svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><title>Baseline-person SVG Icon</title><path fill="#000000" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><title>Baseline-search SVG Icon</title><path fill="#000000" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
            </div>
        </header>
    )
}