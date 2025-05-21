import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-pretendard">
      <Head>
        <title>주식회사 나봄</title>
        <meta name="description" content="병의원 마케팅 전문 주식회사 나봄" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="나봄 로고" width={40} height={40} />
          <span className="font-semibold text-xl">주식회사 나봄</span>
        </div>
      </header>

      <section className="w-full bg-nabomDark text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          병원에 사람이 안 온다? 마케팅이 틀린 겁니다.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          지역 검색, 블로그, 파워링크, 인스타그램, 유튜브까지<br/>
          병원 마케팅은 오직 ‘환자 유입’으로 말합니다.
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">우리는 이렇게 다릅니다</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>경험 기반의 병의원 맞춤 컨설팅</li>
          <li>트렌드를 반영한 채널별 콘텐츠 제작</li>
          <li>전략형 블로그 + 실시간 유입 유도 광고 세팅</li>
          <li>인스타그램, 유튜브까지 브랜드화된 계정 운영</li>
        </ul>
      </section>

      <section className="py-16 px-6 bg-nabomLight text-center">
        <h2 className="text-3xl font-bold mb-4">마케팅 실제 사례 보기</h2>
        <div className="max-w-3xl mx-auto">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.youtube.com/embed/영상ID"
            title="나봄 유튜브 영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">공지사항</h2>
        <ul className="space-y-4 text-left">
          <li className="border-b pb-2">📌 2025년 5월, 나봄 마케팅 세미나 개최</li>
          <li className="border-b pb-2">📌 [공지] 신규 병원 맞춤 패키지 출시</li>
          <li className="border-b pb-2">📌 [휴무 안내] 6월 공휴일 일정 공지</li>
        </ul>
      </section>

      <section className="py-16 px-6 bg-nabomDark text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">문의 남기기</h2>
        <form
          action="https://formspree.io/f/manokkkp"
          method="POST"
          className="max-w-2xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="이름"
            required
            className="w-full p-3 rounded text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            required
            className="w-full p-3 rounded text-black"
          />
          <textarea
            name="message"
            placeholder="문의 내용"
            required
            className="w-full p-3 h-32 rounded text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-nabomAccent hover:bg-nabomAccentDark text-white font-bold py-3 px-6 rounded w-full"
          >
            문의 보내기
          </button>
        </form>
      </section>
    </main>
  );
}
