const footer = {
    copyright: '',
    links: [
        {
            title: '平台工程列表',
            link: '',
        },
        {
            title: '贡献者指南',
            link: '',
        },
    ]
}

export const Footer = () => (
    <section className='bg-white'>
        <div className='wave-top w-full text-coolGray-900'>
            <svg
                viewBox='0 0 1440 116'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z'
                    fill='currentColor'
                />
            </svg>
        </div>
        <div
            className='bg-coolGray-900 overflow-hidden'
            style={{
                backgroundImage:
                    'url("flex-ui-assets/elements/pattern-dark.svg")',
                backgroundPosition: 'center',
            }}
        >
            {/* <div className='container px-4 mx-auto'>
                <div className='flex flex-wrap lg:items-center pt-12 pb-6 -mx-4'>
                    <div className='w-full md:w-1/4 lg:w-auto px-4'>
                        <a className='block mb-5 md:mb-0 max-w-max' href='#'>
                            <img
                                className='h-8'
                                src='flex-ui-assets/logos/flex-ui-blue.svg'
                                alt=''
                            />
                        </a>
                    </div>
                    <div className='w-full md:w-3/4 lg:flex-1 px-4'>
                        <div className='flex flex-wrap justify-end -mx-3 lg:-mx-6'>
                            {
                                footer.links.map((link) => (
                                    <div className='w-full md:w-auto p-3 md:py-0 md:px-6'>
                                        <a
                                            className='inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium'
                                            href={link.link}
                                        >
                                            {link.title}
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='border-b border-coolGray-800' />
            <div className='container px-4 mx-auto'>
                <div className='flex flex-wrap items-center py-12 md:pb-32'>
                    <div className='w-full md:w-1/2 mb-6 md:mb-0'>
                        <p className='text-coolGray-400 font-medium'>
                            © 2023 PE Community China. All rights reserved.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='flex flex-wrap md:justify-end -mx-5'>
                            <div className='px-5'>
                                <a
                                    className='inline-block text-coolGray-300 hover:text-coolGray-400'
                                    href='#'
                                >
                                    <svg
                                        width={18}
                                        height={18}
                                        viewBox='0 0 18 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M9 0C4.0275 0 0 4.13211 0 9.22838C0 13.3065 2.5785 16.7648 6.15375 17.9841C6.60375 18.0709 6.76875 17.7853 6.76875 17.5403C6.76875 17.3212 6.76125 16.7405 6.7575 15.9712C4.254 16.5277 3.726 14.7332 3.726 14.7332C3.3165 13.6681 2.72475 13.3832 2.72475 13.3832C1.9095 12.8111 2.78775 12.8229 2.78775 12.8229C3.6915 12.887 4.16625 13.7737 4.16625 13.7737C4.96875 15.1847 6.273 14.777 6.7875 14.5414C6.8685 13.9443 7.10025 13.5381 7.3575 13.3073C5.35875 13.0764 3.258 12.2829 3.258 8.74709C3.258 7.73988 3.60675 6.91659 4.18425 6.27095C4.083 6.03774 3.77925 5.0994 4.263 3.82846C4.263 3.82846 5.01675 3.58116 6.738 4.77462C7.458 4.56958 8.223 4.46785 8.988 4.46315C9.753 4.46785 10.518 4.56958 11.238 4.77462C12.948 3.58116 13.7017 3.82846 13.7017 3.82846C14.1855 5.0994 13.8818 6.03774 13.7917 6.27095C14.3655 6.91659 14.7142 7.73988 14.7142 8.74709C14.7142 12.2923 12.6105 13.0725 10.608 13.2995C10.923 13.5765 11.2155 14.1423 11.2155 15.0071C11.2155 16.242 11.2043 17.2344 11.2043 17.5341C11.2043 17.7759 11.3617 18.0647 11.823 17.9723C15.4237 16.7609 18 13.3002 18 9.22838C18 4.13211 13.9703 0 9 0Z'
                                            fill='currentColor'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);