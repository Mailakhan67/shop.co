import Link from 'next/link'

export default function PaymentSuccess() {
  return (
    <div className="flex mt-10 flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">Congratulations! Your Payment is Successful 🎉
        </h1>
        <p className="text-lg text-gray-700 mb-6">Thank you for your purchase! Your payment has been processed successfully. We appreciate your trust in us.
        </p>
        
        <div className="space-y-9">
          <Link href="/product">
            <p className="inline-block mb-2 text-center text-white  px-6 py-2 rounded-lg w-full  bg-pink-500 hover:bg-pink-700">
            Explore More Products

            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}      