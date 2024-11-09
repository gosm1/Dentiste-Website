import { FiPhone, FiMapPin } from 'react-icons/fi'

export default function InfoSection() {
  return (
    <div className="bg-gradient-to-r from-bgreen to-ggreen py-4 px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-lg font-medium text-white">
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full p-2">
          <FiPhone className="text-ggreen text-xl" />
        </div>
        <p className="whitespace-nowrap">+212 66843-9890</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full p-2">
          <FiMapPin className="text-ggreen text-xl" />
        </div>
        <p className="text-center md:text-left">97, rue Ibnou Khaldoune</p>
      </div>
    </div>
  )
}
