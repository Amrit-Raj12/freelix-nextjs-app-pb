"use client"

import React from "react"
import { useTranslation } from "next-i18next"

function MovieCategories() {
  const { t } = useTranslation("common")
  return (
    <div className="overflow-y-hidden bg-black">
      <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
        <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
          <div>
            <p className="text-red-700 uppercase text-xl mb-4">
              {t("TYPE OF FILMS")}
            </p>
            <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-white">
              {t("Choose The Type Of Film You Liked")}
            </p>

            {/* <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <img
                src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
                alt="ongoing meeting"
                className="w-full obejct-fit object-center object-fill h-full"
              />
            </div> */}
            <div className="mt-6 md:mt-10 grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:mt-6 2xl:mt-12">
              <div className="flex items-center bg-gray-900 p-8 rounded-xl">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3 bg-red-500 rounded-xl">
                    <svg
                      fill="#ffffff"
                      width="48px"
                      height="48px"
                      viewBox="0 -13.54 122.88 122.88"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path d="M12.14,0H32.8h29.43h28.8h19.71c3.34,0,6.38,1.37,8.58,3.56c2.2,2.2,3.56,5.24,3.56,8.58v7.13v57.25v7.09 c0,3.34-1.37,6.38-3.56,8.58c-2.2,2.2-5.24,3.56-8.58,3.56h-19.2c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04 H62.74c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04H33.31c-0.16,0.03-0.33,0.04-0.51,0.04 c-0.17,0-0.34-0.01-0.51-0.04H12.14c-3.34,0-6.38-1.37-8.58-3.56S0,86.95,0,83.61v-7.09V19.27v-7.13C0,8.8,1.37,5.76,3.56,3.56 C5.76,1.37,8.8,0,12.14,0L12.14,0z M55.19,31.24l20.53,14.32c0.32,0.2,0.61,0.48,0.84,0.81c0.92,1.33,0.58,3.14-0.74,4.06 L55.37,64.57c-0.5,0.41-1.15,0.66-1.85,0.66c-1.62,0-2.93-1.31-2.93-2.93V33.63h0.01c0-0.58,0.17-1.16,0.52-1.67 C52.05,30.64,53.87,30.32,55.19,31.24L55.19,31.24z M93.95,79.45V89.9h16.78c1.73,0,3.3-0.71,4.44-1.85 c1.14-1.14,1.85-2.71,1.85-4.44v-4.16H93.95L93.95,79.45z M88.1,89.9V79.45H65.16V89.9H88.1L88.1,89.9z M59.31,89.9V79.45H35.73 V89.9H59.31L59.31,89.9z M29.87,89.9V79.45H5.85v4.16c0,1.73,0.71,3.3,1.85,4.44c1.14,1.14,2.71,1.85,4.44,1.85H29.87L29.87,89.9z M5.85,73.6H32.8h29.43h28.8h26V22.2h-26h-28.8H32.8H5.85V73.6L5.85,73.6z M88.1,16.35V5.85H65.16v10.49H88.1L88.1,16.35z M93.95,5.85v10.49h23.07v-4.2c0-1.73-0.71-3.3-1.85-4.44c-1.14-1.14-2.71-1.85-4.44-1.85H93.95L93.95,5.85z M59.31,16.35V5.85 H35.73v10.49H59.31L59.31,16.35z M29.87,16.35V5.85H12.14c-1.73,0-3.3,0.71-4.44,1.85c-1.14,1.14-1.85,2.71-1.85,4.44v4.2H29.87 L29.87,16.35z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-white">
                    {t("Action")}
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    1,300+ {t("Movies")}
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-900 p-8 rounded-xl">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3 bg-red-500 rounded-xl">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      enable-background="new 0 0 32 32"
                      width="48px"
                      height="48px"
                      fill="#ffffff"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <rect
                          x="11.7"
                          y="6.6"
                          transform="matrix(0.7071 0.7071 -0.7071 0.7071 17.0399 -4.1169)"
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          width="3.6"
                          height="23.9"
                        ></rect>
                        <polyline
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          points="18.9,16.1 20.9,18.1 23,16.1 25.9,16.1 25.9,13.1 28,11.1 25.9,9 25.9,6.1 23,6.1 20.9,4 18.9,6.1 15.9,6.1 15.9,9 13.9,11.1 15.9,13.1 "
                        ></polyline>
                        <line
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          x1="23"
                          y1="26"
                          x2="29"
                          y2="26"
                        ></line>
                        <line
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          x1="26"
                          y1="23"
                          x2="26"
                          y2="29"
                        ></line>
                        <line
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          x1="18"
                          y1="23"
                          x2="22"
                          y2="23"
                        ></line>
                        <line
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          x1="20"
                          y1="21"
                          x2="20"
                          y2="25"
                        ></line>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-white">
                    {t("Fantasy")}
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    1,300+ {t("Movies")}
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-900 p-8 rounded-xl">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3 bg-red-500 rounded-xl">
                    <svg
                      fill="#ffffff"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48px"
                      height="48px"
                      viewBox="0 0 492.526 492.527"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <g>
                            <path d="M262.651,207.18c-5.666-57.56-27.296-106.848-28.213-108.918c-2.008-4.526-6.146-7.753-11.026-8.593 c-4.883-0.842-9.86,0.812-13.266,4.407c-30.694,32.38-58.73,51.188-88.231,59.19c-29.492,8.002-62.094,5.71-102.599-7.216 c-4.786-1.527-10.019-0.524-13.9,2.661c-3.883,3.186-5.886,8.12-5.323,13.112c0.254,2.25,6.494,55.713,30.688,108.245 c33.608,72.974,85.313,108.119,149.523,101.64c0.808-0.08,1.607-0.229,2.389-0.439c0.782-0.212,1.548-0.488,2.287-0.827 C243.664,343.588,270.522,287.133,262.651,207.18z M43.808,219.902c-0.885-12.05,14.402-22.995,34.143-24.445 c19.741-1.452,36.464,7.139,37.35,19.189c0.886,12.05-14.896,16.245-34.637,17.694C60.92,233.793,44.695,231.952,43.808,219.902z M169.943,324.258c-36.473,9.893-70.586,1.15-76.193-19.525c-0.399-1.476-0.627-2.974-0.723-4.482 c17.808,7.547,43.745,8.568,70.742,1.246s48.863-21.311,60.417-36.82c0.681,1.352,1.243,2.758,1.642,4.234 C231.435,289.584,206.415,314.366,169.943,324.258z M200.541,199.827c-17.769,8.722-33.507,13.076-38.831,2.231 c-5.325-10.847,4.766-26.71,22.534-35.433c17.771-8.723,36.489-7.002,41.814,3.844 C231.384,181.317,218.311,191.104,200.541,199.827z"></path>
                            <path d="M489.815,222.972c-2.854-4.049-7.546-6.398-12.495-6.268c-44.6,1.181-77.722-5.352-104.236-20.561 c-26.508-15.203-47.935-39.882-67.427-77.667c-2.303-4.465-6.71-7.457-11.709-7.951c-4.996-0.493-9.905,1.578-13.036,5.504 c-0.659,0.827-8.302,10.482-18.302,26.064c3.701,13.061,7.312,28.063,10.012,44.124c8.688-6.852,25.646-3.345,39.543,8.655 c14.982,12.935,20.728,30.837,12.831,39.981c-7.897,9.144-22.021,0.948-37.004-11.989c-4.624-3.992-8.786-7.97-12.104-11.828 c3.093,33,0.698,62.74-7.122,88.769c12.188,1.54,25.727,6.079,38.878,13.62c32.779,18.804,50.711,49.11,40.052,67.692 c-0.76,1.328-1.658,2.545-2.658,3.681c-7.252-17.929-24.865-36.995-49.129-50.915c-11.521-6.606-23.278-11.312-34.507-14.156 c-0.546,1.225-1.101,2.443-1.674,3.648c-7.01,14.732-16.006,27.804-26.913,39.16c7.215,10.693,16.23,20.492,27.042,29.326 c0.63,0.516,1.301,0.975,2.002,1.379c0.704,0.403,1.44,0.749,2.202,1.033c60.479,22.522,119.396,1.611,170.381-60.479 c36.704-44.697,56.274-94.84,57.093-96.951C493.315,232.226,492.672,227.019,489.815,222.972z M434.538,281.964 c-3.908,11.433-20.07,9.106-38.804,2.704c-18.729-6.399-32.936-14.453-29.028-25.887s22.261-15.512,40.989-9.11 C426.429,256.073,438.444,270.532,434.538,281.964z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-white">
                    {t("Comedy")}
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    1,300+ {t("Movies")}
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-900 p-8 rounded-xl">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3 bg-red-500 rounded-xl">
                    <svg
                      fill="#ffffff"
                      width="48px"
                      height="48px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16.001-7.163 16.001-16s-7.163-16-16.001-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14.001 6.28 14.001 14-6.281 14.032-14.001 14.032zM14.53 25.015h2.516v-2.539h-2.516zM15.97 6.985c-1.465 0-2.672 0.395-3.62 1.184s-1.409 2.37-1.386 3.68l0.037 0.073h2.295c0-0.781 0.261-1.904 0.781-2.308s1.152-0.604 1.893-0.604c0.854 0 1.511 0.232 1.971 0.696s0.689 1.127 0.689 1.989c0 0.725-0.17 1.343-0.512 1.855-0.343 0.512-0.916 1.245-1.721 2.198-0.831 0.749-1.344 1.351-1.538 1.806s-0.297 1.274-0.305 2.454h2.405c0-0.74 0.047-1.285 0.14-1.636s0.36-0.744 0.799-1.184c0.945-0.911 1.703-1.802 2.277-2.674 0.573-0.87 0.86-1.831 0.86-2.881 0-1.465-0.443-2.607-1.331-3.424s-2.134-1.226-3.736-1.226z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-white">
                    {t("Mystery")}
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    1,300+ {t("Movies")}
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-gray-900 p-8 rounded-xl">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3 bg-red-500 rounded-xl">
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-white">
                    {t("Drama")}
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    1,300+ {t("Movies")}
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-900 p-8 rounded-xl">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3 bg-red-500 rounded-xl">
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M15.5455 9.92543C15.9195 9.26103 16.2313 8.66151 16.4236 8.20521C17.3573 5.98947 16.434 3.44077 14.1769 2.40112C11.9199 1.36148 9.65341 2.4395 8.65871 4.52093C6.75657 3.2157 4.21918 3.40739 2.81989 5.44424C1.42059 7.48108 1.85975 10.142 3.77629 11.594C4.6461 12.253 6.36636 13.2242 7.98596 14.0884M16.2972 11.7499C15.8751 9.482 13.9454 7.82334 11.5156 8.27415C9.08592 8.72497 7.51488 10.9171 7.84335 13.299C8.10725 15.2127 9.56392 19.7027 10.1264 21.394C10.2032 21.6248 10.2415 21.7402 10.3175 21.8206C10.3837 21.8907 10.4717 21.9416 10.5655 21.9638C10.6732 21.9894 10.7923 21.9649 11.0306 21.916C12.7765 21.5575 17.3933 20.574 19.1826 19.8457C21.4096 18.9392 22.5589 16.4841 21.6981 14.153C20.8372 11.8219 18.4723 10.9815 16.2972 11.7499Z"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-white">
                    {t("Romance")}
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    1,300+ {t("Movies")}
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-900 p-8 rounded-xl">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3 bg-red-500 rounded-xl">
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M9 10H9.009M15 10H15.009M5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10V21L18.1828 20.4552C17.4052 19.9368 17.0165 19.6777 16.605 19.6045C16.2421 19.54 15.8685 19.577 15.5253 19.7114C15.1362 19.8638 14.8058 20.1942 14.145 20.855V20.855C14.0649 20.9351 13.9351 20.935 13.8549 20.855C13.4039 20.4052 13.1548 20.1686 12.888 20.0364C12.3285 19.7591 11.6715 19.7591 11.112 20.0364C10.8452 20.1686 10.5961 20.4052 10.1451 20.855C10.0649 20.935 9.93508 20.9351 9.855 20.855V20.855C9.19423 20.1942 8.86384 19.8638 8.47469 19.7114C8.13152 19.577 7.75788 19.54 7.39501 19.6045C6.98352 19.6777 6.59475 19.9368 5.81722 20.4552L5 21V10Z"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-white">
                    {t("Horror")}
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    1,300+ {t("Movies")}
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-900 p-8 rounded-xl">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3 bg-red-500 rounded-xl">
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--emojione-monotone"
                      preserveAspectRatio="xMidYMid meet"
                      fill="#ffffff"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M32 2C15.791 2 5 13.123 5 30.607C5 54.065 32 62 32 62s27-7.935 27-31.393C59 13.123 48.207 2 32 2zm12.143 50.996C39.039 56.739 33.848 58.73 32 59.369c-4.086-1.415-24.5-9.46-24.5-28.762C7.5 14.748 17.117 4.5 32 4.5s24.5 10.248 24.5 26.107c0 8.841-4.158 16.374-12.357 22.389z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M42.303 45.452c-.311 0-.662.176-1.301.494c-1.527.765-4.371 2.187-9.004 2.187c-4.629 0-7.475-1.422-9.002-2.187c-.637-.318-.988-.494-1.299-.494c-.334 0-.672.229-.672.743c0 2.525 5.334 4.913 10.973 4.913c5.643 0 10.975-2.388 10.975-4.913c0-.513-.336-.743-.67-.743"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M26.084 37.71c1.633-1.607 1.688-4.359.43-7.146l.016.014c-.613-1.629-1.662-3.048-2.848-4.292a17.764 17.764 0 0 0-4.084-3.167a17.533 17.533 0 0 0-4.799-1.848c-1.666-.375-3.387-.502-5.074-.271c1.542.576 3.023 1.102 4.462 1.699c-.847.188-1.597.562-2.19 1.146c-2.482 2.443-1.338 7.524 2.553 11.354c3.889 3.826 9.055 4.951 11.534 2.511m-7.883-8.965c-1.99-1.247-3.076-3.086-2.42-4.106c.662-1.021 2.814-.837 4.807.409c1.996 1.247 3.078 3.086 2.418 4.106c-.656 1.022-2.807.838-4.805-.409"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M49.81 22.699c1.44-.597 2.921-1.122 4.462-1.699c-1.688-.23-3.404-.105-5.072.271c-1.67.377-3.299.992-4.799 1.847a17.706 17.706 0 0 0-4.082 3.166c-1.189 1.246-2.236 2.665-2.85 4.293l.015-.013c-1.258 2.786-1.204 5.539.429 7.146c2.48 2.442 7.646 1.317 11.535-2.512c3.891-3.828 5.033-8.91 2.555-11.354c-.595-.583-1.346-.958-2.193-1.145m-4.017 6.046c-1.994 1.246-4.146 1.43-4.807.407c-.656-1.02.426-2.858 2.42-4.104c1.996-1.247 4.146-1.431 4.809-.408c.656 1.02-.428 2.857-2.422 4.105"
                          fill="#ffffff"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-white">
                    {t("Sci-Fi")}
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    1,300+ {t("Movies")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
            <img
              src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
              alt="ongoing meeting"
              className="w-full obejct-fit object-center object-fill h-full"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default MovieCategories
