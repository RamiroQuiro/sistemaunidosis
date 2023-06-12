

export default function LoadingCss() {
  return (
    <div className="w-full h-full z-20 flex items-center justify-center mx-auto absolute top-0 left-0 bg-gradient-to-tr to-blue-500/40 from-rose-500/40 backdrop-blur-sm">
    <div className="lds-ripple  text-xl font-medium m-auto ">
      <div></div>
      <div></div>
    </div>
  </div>
  )
}
