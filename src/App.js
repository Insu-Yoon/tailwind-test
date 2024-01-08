import "./App.css";
import { ReactComponent as SmallLogo } from "./SmallLogo.svg";
import { ReactComponent as CompanyName } from "./CompanyName.svg";
import { ReactComponent as BigLogo } from "./BigLogo.svg";

function App() {
  return (
    <div className="w-screen h-screen px-5 pt-[60px] pb-[100px] lg:pt-[80px] lg:pb-[160px] lg:px-2.5">
      <div className="box-border flex flex-col items-center justify-start gap-10 m-0 lg:gap-20 text-gray3 font-pre">
        <div className="flex flex-col items-center justify-center gap-10 w-min">
          <div className="flex items-center justify-center gap-x-3">
            <div className="w-0 h-6 border-r-4 border-gray3"></div>
            <h1 className="text-2xl font-extrabold ">GKH 제품 카탈로그</h1>
          </div>
          {/* 사진영역 ~ 날짜까지 (전체박스)*/}
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="relative flex flex-col items-start bg-grayF0 text-gray3 w-80">
              <div className="absolute z-0 w-full h-full opacity-25 bg-vector"></div>
              {/* 이 아래는 사진~주식회사영역 하나.(두개로 나눠서 ~제품안내서 / 주식회사) 여기에 벡터 배경 */}
              <div className="z-10 flex flex-col items-center mb-5 mt-15 ml-50px gap-68px">
                {/* 로고~제품안내서 */}
                <div className="flex flex-col items-center gap-4">
                  {/* 로고 */}
                  <div className="p-10 bg-white rounded-full w-200px h-200px">
                    <BigLogo />
                  </div>
                  {/* gap 맞추기용 빈 div하나 넣을 곳*/}
                  <div></div>
                  {/* 스트레치필름 */}
                  <p className="text-2xl font-semibold leading-6">
                    스트레치 필름
                  </p>
                  {/* 제품안내서 */}
                  <p className="text-5xl font-extrabold leading-48px">
                    제품 안내서
                  </p>
                </div>
                {/* 지케이에이치 주식회사 */}
                <div className="flex items-start gap-2 h-2.5">
                  <SmallLogo />
                  <CompanyName />
                </div>
              </div>
            </div>
            {/*스트레치 필름 제품안내서 + 날짜 */}
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold">GKH 스트레치 필름 제품 안내서</p>
              <p className="text-sm leading-6 text-gray6">2023.12.31</p>
            </div>
          </div>
        </div>
        <div className="w-full border border-b-0 lg:w-860px border-t-grayD border-x-0"></div>
      </div>
    </div>
  );
}
export default App;
