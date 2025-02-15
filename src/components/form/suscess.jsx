import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-PrimaryBg">
      <div className="text-center">
        <div className="bg-orange-600 w-16 h-16 rounded-full mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-800">العملية قيد الانتظار</h1>
        <p className="text-gray-600 mt-2">
          سيتم المراجعة في أقرب وقت، ابعتلنا رسالة وهنرد عليك خلال 24 ساعة
        </p>
        <div className="mt-6 space-y-4">
          <a
            href="https://wa.me/qr/FNUEXGXGK47JF1"
            className="bg-green-500 text-white px-6 py-2 rounded-lg block text-center"
          >
            ابعتلنا واتساب من هنا
          </a>
          <Link
            to="/"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg block text-center"
          >
            الذهاب إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
