
import React from 'react';
import moment from 'moment/moment';
import members from '@/data/members/index.json';
import activities from '@/data/activities/index.json';
import navs from '@/data/navs/index.json';

const meta = {
  title: '平台工程社区 · 中国',
  meta: [],
  link: [],
  style: [],
  script: [],
};

const categories = [
  {
    name: "全部分类",
    anchor: "",
  },
  {
    name: "深度文章",
    anchor: "articles",
  },
  {
    name: "最佳实践",
    anchor: "practices",
  },
  {
    name: "活动公告",
    anchor: "events",
  },
  {
    name: "赞助商投稿",
    anchor: "sponsors",
  },
];

export default function Home() {
  return (
    <main>
      <section className='relative bg-white overflow-hidden'>
        <div className='bg-coolGray-900'>
          <nav className='flex justify-between p-6 px-4'>
            <div className='flex justify-between items-center w-full'>
              <div className='w-1/2 xl:w-1/3'>
                <a className='block max-w-max' href='#'>
                  <img
                    className='h-8'
                    src='images/Platform-Engineering-2022.svg'
                    alt=''
                  />
                </a>
              </div>
              <div className='w-1/2 xl:w-1/3'>
                <ul className='hidden xl:flex xl:justify-center'>
                  {navs.map((nav) => (
                    <li className='mr-12' key={nav.title}>
                      <a
                        className='text-coolGray-400 hover:text-coolGray-50 font-medium'
                        href={nav.link}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='w-1/2 xl:w-1/3'>
                <div className='hidden xl:flex items-center justify-end'>
                  <a
                    className='inline-block py-2 px-4 mr-2 leading-5 text-coolGray-400 hover:text-coolGray-50 bg-transparent font-medium rounded-md'
                    href='#'
                  >
                    Slack
                  </a>
                  <a
                    className='inline-block py-2 px-4 text-sm leading-5 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md'
                    href='#'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <button className='navbar-burger self-center xl:hidden'>
              <svg
                width={35}
                height={35}
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  className='text-coolGray-800'
                  width={32}
                  height={32}
                  rx={6}
                  fill='currentColor'
                />
                <path
                  className='text-coolGray-400'
                  d='M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </nav>
          <div className='navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50'>
            <div className='fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-coolGray-900'>
              <nav className='relative p-6 h-full overflow-y-auto'>
                <div className='flex flex-col justify-between h-full'>
                  <a className='inline-block' href='#'>
                    <img
                      className='h-8'
                      src='flex-ui-assets/logos/flex-ui-blue.svg'
                      alt=''
                    />
                  </a>
                  <ul className='py-6'>
                    {navs.map((nav) => (
                      <li key={nav.title}>
                        <a
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          href={nav.link}
                        >
                          {nav.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap'>
                    <div className='w-full mb-2'>
                      <a
                        className='inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-400 hover:text-white bg-transparent font-medium text-center rounded-md'
                        href='#'
                      >
                        Slack
                      </a>
                    </div>
                    <div className='w-full'>
                      <a
                        className='inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-blue-500 hover:bg-blue-600 font-medium text-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md'
                        href='#'
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
              <a className='navbar-close absolute top-5 p-4 right-3' href='#'>
                <svg
                  width={12}
                  height={12}
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.94004 5.99988L11.14 1.80655C11.2656 1.68101 11.3361 1.51075 11.3361 1.33321C11.3361 1.15568 11.2656 0.985415 11.14 0.859879C11.0145 0.734344 10.8442 0.663818 10.6667 0.663818C10.4892 0.663818 10.3189 0.734344 10.1934 0.859879L6.00004 5.05988L1.80671 0.859879C1.68117 0.734344 1.51091 0.663819 1.33337 0.663819C1.15584 0.663819 0.985576 0.734344 0.860041 0.859879C0.734505 0.985415 0.66398 1.15568 0.66398 1.33321C0.66398 1.51075 0.734505 1.68101 0.860041 1.80655L5.06004 5.99988L0.860041 10.1932C0.797555 10.2552 0.747959 10.3289 0.714113 10.4102C0.680267 10.4914 0.662842 10.5785 0.662842 10.6665C0.662842 10.7546 0.680267 10.8417 0.714113 10.9229C0.747959 11.0042 0.797555 11.0779 0.860041 11.1399C0.922016 11.2024 0.99575 11.252 1.07699 11.2858C1.15823 11.3197 1.24537 11.3371 1.33337 11.3371C1.42138 11.3371 1.50852 11.3197 1.58976 11.2858C1.671 11.252 1.74473 11.2024 1.80671 11.1399L6.00004 6.93988L10.1934 11.1399C10.2554 11.2024 10.3291 11.252 10.4103 11.2858C10.4916 11.3197 10.5787 11.3371 10.6667 11.3371C10.7547 11.3371 10.8419 11.3197 10.9231 11.2858C11.0043 11.252 11.0781 11.2024 11.14 11.1399C11.2025 11.0779 11.2521 11.0042 11.286 10.9229C11.3198 10.8417 11.3372 10.7546 11.3372 10.6665C11.3372 10.5785 11.3198 10.4914 11.286 10.4102C11.2521 10.3289 11.2025 10.2552 11.14 10.1932L6.94004 5.99988Z'
                    fill='#8896AB'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className='py-20 md:py-28 bg-coolGray-900'
          style={{
            backgroundImage:
              'url("flex-ui-assets/elements/pattern-dark2.svg")',
            backgroundPosition: 'center',
          }}
        >
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap xl:items-center -mx-4'>
              <div className='w-full md:w-1/2 px-4 mb-16 md:mb-0'>
                <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-500 uppercase rounded-9xl'>
                  CHINA
                </span>
                <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tight'>
                  平台工程社区 - 中国
                </h1>
                <p className='mb-8 text-lg md:text-xl text-coolGray-400 font-medium'>
                  设计和构建工具链及工作流的学科，为云原生时代的软件工程组织提供自助服务能力。
                </p>
                <div className='flex flex-wrap'>
                  <div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
                    <a
                      className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm'
                      href='/awesome-list'
                    >
                      查看白皮书
                    </a>
                  </div>
                  <div className='w-full md:w-auto py-1 md:py-0'>
                    <a
                      className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-100 font-medium text-center bg-coolGray-700 hover:bg-coolGray-800 focus:ring-2 focus:ring-coolGray-700 focus:ring-opacity-50 rounded-md shadow-sm'
                      href='#'
                    >
                      加入我们
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 px-4'>
                <div className='relative mx-auto md:mr-0 max-w-max'>
                  <img
                    className='absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400'
                    src='flex-ui-assets/elements/circle3-violet.svg'
                    alt=''
                  />
                  <img
                    className='absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500'
                    src='flex-ui-assets/elements/dots3-red.svg'
                    alt=''
                  />
                  <img
                    className='relative rounded-7xl'
                    src='flex-ui-assets/images/headers/header.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='wave-bottom w-full text-coolGray-900'>
          <svg
            viewBox='0 0 1440 116'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </section>
      <section
        className='relative bg-coolGray-900 overflow-hidden'
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-dark2.svg")',
          backgroundPosition: 'center',
        }}
      >
        <div className='bg-transparent'>
          <div className='navbar-menu hidden fixed top-0 z-50 left-0 w-full h-full bg-coolGray-900 bg-opacity-50'>
            <div className='fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-coolGray-900'>
              <nav className='relative p-6 h-full overflow-y-auto'>
                <div className='flex flex-col justify-between h-full'>
                  <a className='inline-block' href='#'>
                    <img
                      className='h-8'
                      src='flex-ui-assets/logos/flex-ui-blue.svg'
                      alt=''
                    />
                  </a>
                  <ul className='py-6'>
                    {navs.map((nav) => (
                      <li key={nav.title}>
                        <a
                          className='block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md'
                          href={nav.link}
                        >
                          {nav.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap'>
                    <div className='w-full mb-2'>
                      <a
                        className='inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-400 hover:text-white bg-transparent font-medium text-center rounded-md'
                        href='#'
                      >
                        Slack
                      </a>
                    </div>
                    <div className='w-full'>
                      <a
                        className='inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-blue-500 hover:bg-blue-600 font-medium text-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md'
                        href='#'
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
              <a className='navbar-close absolute top-5 p-4 right-3' href='#'>
                <svg
                  width={12}
                  height={12}
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.94004 5.99988L11.14 1.80655C11.2656 1.68101 11.3361 1.51075 11.3361 1.33321C11.3361 1.15568 11.2656 0.985415 11.14 0.859879C11.0145 0.734344 10.8442 0.663818 10.6667 0.663818C10.4892 0.663818 10.3189 0.734344 10.1934 0.859879L6.00004 5.05988L1.80671 0.859879C1.68117 0.734344 1.51091 0.663819 1.33337 0.663819C1.15584 0.663819 0.985576 0.734344 0.860041 0.859879C0.734505 0.985415 0.66398 1.15568 0.66398 1.33321C0.66398 1.51075 0.734505 1.68101 0.860041 1.80655L5.06004 5.99988L0.860041 10.1932C0.797555 10.2552 0.747959 10.3289 0.714113 10.4102C0.680267 10.4914 0.662842 10.5785 0.662842 10.6665C0.662842 10.7546 0.680267 10.8417 0.714113 10.9229C0.747959 11.0042 0.797555 11.0779 0.860041 11.1399C0.922016 11.2024 0.99575 11.252 1.07699 11.2858C1.15823 11.3197 1.24537 11.3371 1.33337 11.3371C1.42138 11.3371 1.50852 11.3197 1.58976 11.2858C1.671 11.252 1.74473 11.2024 1.80671 11.1399L6.00004 6.93988L10.1934 11.1399C10.2554 11.2024 10.3291 11.252 10.4103 11.2858C10.4916 11.3197 10.5787 11.3371 10.6667 11.3371C10.7547 11.3371 10.8419 11.3197 10.9231 11.2858C11.0043 11.252 11.0781 11.2024 11.14 11.1399C11.2025 11.0779 11.2521 11.0042 11.286 10.9229C11.3198 10.8417 11.3372 10.7546 11.3372 10.6665C11.3372 10.5785 11.3198 10.4914 11.286 10.4102C11.2521 10.3289 11.2025 10.2552 11.14 10.1932L6.94004 5.99988Z'
                    fill='#8896AB'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className='py-24 bg-white'
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left top',
        }}
      >
        <div className='container px-4 mx-auto'>
          <div className='md:max-w-5xl mx-auto mb-8 md:mb-16 text-center'>
            <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm'>
              ACTIVITIES
            </span>
            <h3 id='activities' className='mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter'>
              近期活动
            </h3>
            <p className='mb-10 text-lg md:text-xl text-coolGray-500 font-medium'>
              让「平台工程」成为软件开发生命周期的二阶助推器！
            </p>
            <div className='relative mx-auto md:w-80'>
              <img
                className='absolute top-1/2 left-4 transform -translate-y-1/2'
                src='flex-ui-assets/elements/blog/search.svg'
                alt=''
              />
              <input
                className='w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                type='text'
                placeholder='搜索'
              />
            </div>
          </div>
          <ul className='flex flex-wrap mb-8 -mx-2 text-center'>
            {categories.map((category) => (
              <li className='w-full md:w-auto px-2' key={category.name}>
                <a
                  className='inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-blue-500 hover:bg-blue-200 font-bold rounded-md hover:shadow-sm'
                  href={category.anchor}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex flex-wrap -mx-4 mb-12 md:mb-20'>
            {activities.map((activity) => (
              <div className='w-full md:w-1/2 px-4 mb-8' key={activity.title}>

                <a className='block mb-6 overflow-hidden rounded-md' href='#'>
                  <img
                    className='w-full'
                    src={activity.cover}
                    alt=''
                  />
                </a>
                <div className='mb-4'>
                  <span
                    className='inline-block py-1 px-3 text-xs leading-5 text-blue-500 hover:text-blue-600 font-medium uppercase bg-blue-100 hover:bg-blue-200 rounded-full shadow-sm'
                  >
                    {activity.category}
                  </span>
                </div>
                <p className='mb-2 text-coolGray-500 font-medium'>
                  {activity.author} • {moment(activity.date).format('LL')}
                </p>
                <a
                  className='inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                  href={activity.link}
                  target='_blank'
                >
                  {activity.title}
                </a>
                <p className='mb-4 text-base md:text-lg text-coolGray-400 font-medium'>
                  {activity.summary}
                </p>
                <a
                  className='inline-flex items-center text-base md:text-lg text-blue-500 hover:text-blue-600 font-semibold'
                  href={activity.link}
                  target='_blank'
                >
                  <span className='mr-3'>开始阅读</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox='0 0 8 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
            ))
            }

          </div>
          <a
            className='flex items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-blue-50 font-medium bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:max-w-max rounded-md'
            href='#'
          >
            <span className='mr-3'>查看更多</span>
            <svg
              className='text-blue-50'
              width={12}
              height={10}
              viewBox='0 0 12 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.7583 4.40833C10.6809 4.33023 10.5887 4.26823 10.4871 4.22592C10.3856 4.18362 10.2767 4.16183 10.1667 4.16183C10.0567 4.16183 9.94773 4.18362 9.84619 4.22592C9.74464 4.26823 9.65247 4.33023 9.575 4.40833L6.83333 7.15833V0.833333C6.83333 0.61232 6.74554 0.400358 6.58926 0.244078C6.43297 0.0877975 6.22101 0 6 0C5.77899 0 5.56702 0.0877975 5.41074 0.244078C5.25446 0.400358 5.16667 0.61232 5.16667 0.833333V7.15833L2.425 4.40833C2.26808 4.25141 2.05525 4.16326 1.83333 4.16326C1.61141 4.16326 1.39859 4.25141 1.24167 4.40833C1.08475 4.56525 0.99659 4.77808 0.99659 5C0.99659 5.22192 1.08475 5.43475 1.24167 5.59167L5.40833 9.75833C5.48759 9.8342 5.58104 9.89367 5.68333 9.93333C5.78308 9.97742 5.89094 10.0002 6 10.0002C6.10906 10.0002 6.21692 9.97742 6.31667 9.93333C6.41896 9.89367 6.51241 9.8342 6.59167 9.75833L10.7583 5.59167C10.8364 5.5142 10.8984 5.42203 10.9407 5.32048C10.9831 5.21893 11.0048 5.11001 11.0048 5C11.0048 4.88999 10.9831 4.78107 10.9407 4.67952C10.8984 4.57797 10.8364 4.4858 10.7583 4.40833Z'
                fill='currentColor'
              />
            </svg>
          </a>
        </div>
      </section>
      <section className='wave-top wave-bottom'>
        <div className='wave wave-top w-full text-coolGray-900'>
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
          className='py-24 bg-coolGray-900'
          style={{
            backgroundImage:
              'url("flex-ui-assets/elements/pattern-dark2.svg")',
            backgroundPosition: 'center',
          }}
        >
          <div className='container px-4 mx-auto'>
            <div className='mb-16 text-center'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-9xl'>
                Team
              </span>
              <h3 id="members" className='mb-4 text-3xl md:text-5xl leading-tight text-white font-bold tracking-tighter'>
                社区成员
              </h3>
              <p className='mb-8 text-lg md:text-xl text-coolGray-400 font-medium'>
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
                members.map((member) => (
                  <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-10' key={member.name}>
                    <div className='h-full py-8 px-10 bg-white rounded-md text-center'>
                      <img
                        className='w-24 h-24 mx-auto mb-6 rounded-full'
                        src='flex-ui-assets/images/teams/avatar1.png'
                        alt=''
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
                      <div className='flex items-center justify-center'>
                        <a
                          className='inline-block mr-6 hover:opacity-80'
                          href='#'
                        >
                          <img src='flex-ui-assets/brands/facebook.svg' alt='' />
                        </a>
                        <a className='inline-block hover:opacity-80' href='#'>
                          <img src='flex-ui-assets/brands/twitter.svg' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='wave wave-bottom w-full text-coolGray-900'>
          <svg
            viewBox='0 0 1440 116'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </section>
      <section
        className='bg-white'
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: 'center',
        }}
      >
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap pt-24 pb-12 -mx-4'>
            <div className='w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0'>
              <a className='inline-block mb-4' href='#'>
                <img
                  className='h-8'
                  src='images/Platform-Engineering-2022.svg'
                  alt=''
                />
              </a>
              <p className='text-base md:text-lg text-coolGray-500 font-medium lg:w-64'>
                平台工程社区 · 中国
              </p>
            </div>
            <div className='w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0'>
              <h3 className='mb-5 text-lg font-bold text-coolGray-900'>
                概念
              </h3>
              <ul>
                <li className='mb-4'>
                  <a
                    className='inline-block text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    平台工程
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    className='inline-block text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    万物即代码
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    className='inline-block text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    GitOps
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0'>
              <h3 className='mb-5 text-lg font-bold text-coolGray-900'>
                相关链接
              </h3>
              <ul>
                <li className='mb-4'>
                  <a
                    className='inline-block text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    平台工程社区（Slack）
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    className='inline-block text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    中国
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full md:w-1/3 lg:w-4/12 px-4'>
              <h3 className='mb-5 text-lg font-bold text-coolGray-900'>
                订阅动态
              </h3>
              <div className='flex flex-wrap'>
                <div className='w-full lg:flex-1 py-1 lg:py-0 lg:mr-3'>
                  <input
                    className='px-3 w-full h-12 text-coolGray-900 outline-none placeholder-coolGray-500 border border-coolGray-200 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg shadow-xsm'
                    placeholder='Your email'
                  />
                </div>
                <div className='w-full lg:w-auto py-1 lg:py-0'>
                  <a
                    className='inline-block py-4 px-5 w-full leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm'
                    href='#'
                  >
                    订阅
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-b border-coolGray-100' />
        <p className='py-10 md:pb-16 text-sm text-coolGray-400 font-medium text-center'>
          © 2023 PE Community. All rights reserved.
        </p>
      </section>
    </main>
  );
}
