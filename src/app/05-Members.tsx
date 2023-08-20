import members from '@/data/members/index.json';

export const MemberSection = () => (
    <section
        className='py-2 bg-white'
    >
        <div className='container px-4 mx-auto'>
            <div className='mb-16 text-center'>
                <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-9xl'>
                    Members
                </span>
                <h3 className='mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter' id="members">
                    社区成员
                </h3>
                <p className='mb-8 text-lg md:text-xl text-coolGray-500 font-medium'>
                    众人拾柴火焰高！
                </p>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
                        <a
                            className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm'
                            href='#'
                        >
                            加入我们
                        </a>
                    </div>
                    <div className='w-full md:w-auto py-1 md:py-0'>
                        <a
                            className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm'
                            href='#'
                        >
                            社区章程
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
                {
                    members.map(member => (
                        <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-10' key={member.name}>
                            <div className='h-full py-8 px-10 bg-coolGray-50 rounded-md text-center'>
                                <img
                                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                                    src={member.avatar}
                                    alt={`${member.name}`}
                                />
                                <h3 className='mb-2 text-2xl md:text-3xl leading-tight font-semibold'>
                                    {member.name}
                                </h3>
                                <span className='inline-block mb-6 text-lg font-medium text-blue-500'>
                                    {member.role}
                                </span>
                                <p className='mb-8 text-coolGray-500 font-medium'>
                                    {member.intro}
                                    {member.tags.map((tag) => (
                                        <span key={tag} className='inline-block py-1 px-3 ml-2 text-xs leading-5 text-green-500 hover:text-green-600 font-medium uppercase bg-green-100 hover:bg-green-200 rounded-full shadow-sm'>
                                            {tag}
                                        </span>
                                    ))}
                                </p>
                                {/* <div className='flex items-center justify-center'>
                                    <a className='inline-block mr-6 hover:opacity-80' href='#'>
                                        <img src='flex-ui-assets/brands/facebook.svg' alt='' />
                                    </a>
                                    <a className='inline-block hover:opacity-80' href='#'>
                                        <img src='flex-ui-assets/brands/twitter.svg' alt='' />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
)