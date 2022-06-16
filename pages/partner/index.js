export default function () {
	return (
		<div className='w-full p-10 flex flex-col justify-center items-center'>
			<div className="flex flex-row w-full items-center px-10">
				<div className="flex-1">
					<p className="text-3xl p-2 mr-10">Partners</p>
				</div>
				<div class="flex-1 flex justify-center">
					<div class="xl:w-[500px]">
						<div class="input-group relative flex flex-row items-stretch w-full">
							<input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
							<button class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
						</div>
					</div>
				</div>
				<div>
				<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
					<svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 122.875 122.648"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z"/></g></svg>
					<span>Add Parnter</span>
				</button>
				</div>
			</div>
			<div className="w-full flex justify-center mt-10">
				<table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Parter Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Active
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Report Types
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Yes
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
								<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">POD</span>
								<span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">ScanAudit</span>
								<span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Exception</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
								<svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 512 512">
									<path d="M493.278,154.515l-22.625,22.641L334.871,41.39l22.625-22.641c25-25,65.531-25,90.531,0l45.25,45.266
										C518.246,89,518.246,129.515,493.278,154.515z M176.465,426.031c-6.25,6.25-6.25,16.375,0,22.625c6.25,6.281,16.375,6.281,22.625,0 l248.938-248.875l-22.656-22.641L176.465,426.031z M63.309,312.906c-6.25,6.25-6.25,16.375,0,22.625s16.375,6.25,22.625,0 L334.871,86.64l-22.625-22.625L63.309,312.906z M357.465,109.25L108.559,358.156c-12.5,12.469-12.469,32.75,0,45.25 c12.5,12.5,32.75,12.563,45.281-0.031l248.906-248.859L357.465,109.25z M153.778,471.219c-7.656-7.656-11.344-17.375-12.719-27.375 c-3.25,0.5-6.531,0.969-9.875,0.969c-17.094,0-33.156-6.688-45.25-18.781c-12.094-12.125-18.75-28.156-18.75-45.25 c0-3.125,0.469-6.156,0.906-9.188c-10.344-1.406-19.906-5.938-27.406-13.438c-0.719-0.719-0.969-1.688-1.625-2.469L-0.004,512 l155.906-39.031C155.215,472.344,154.434,471.875,153.778,471.219z"/>
								</svg>
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Yes
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
								<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">POD</span>
								<span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Exception</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
								<svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 512 512">
									<path d="M493.278,154.515l-22.625,22.641L334.871,41.39l22.625-22.641c25-25,65.531-25,90.531,0l45.25,45.266
										C518.246,89,518.246,129.515,493.278,154.515z M176.465,426.031c-6.25,6.25-6.25,16.375,0,22.625c6.25,6.281,16.375,6.281,22.625,0 l248.938-248.875l-22.656-22.641L176.465,426.031z M63.309,312.906c-6.25,6.25-6.25,16.375,0,22.625s16.375,6.25,22.625,0 L334.871,86.64l-22.625-22.625L63.309,312.906z M357.465,109.25L108.559,358.156c-12.5,12.469-12.469,32.75,0,45.25 c12.5,12.5,32.75,12.563,45.281-0.031l248.906-248.859L357.465,109.25z M153.778,471.219c-7.656-7.656-11.344-17.375-12.719-27.375 c-3.25,0.5-6.531,0.969-9.875,0.969c-17.094,0-33.156-6.688-45.25-18.781c-12.094-12.125-18.75-28.156-18.75-45.25 c0-3.125,0.469-6.156,0.906-9.188c-10.344-1.406-19.906-5.938-27.406-13.438c-0.719-0.719-0.969-1.688-1.625-2.469L-0.004,512 l155.906-39.031C155.215,472.344,154.434,471.875,153.778,471.219z"/>
								</svg>
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Larry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Wild
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                No
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
								<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">POD</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
								<svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 512 512">
									<path d="M493.278,154.515l-22.625,22.641L334.871,41.39l22.625-22.641c25-25,65.531-25,90.531,0l45.25,45.266
										C518.246,89,518.246,129.515,493.278,154.515z M176.465,426.031c-6.25,6.25-6.25,16.375,0,22.625c6.25,6.281,16.375,6.281,22.625,0 l248.938-248.875l-22.656-22.641L176.465,426.031z M63.309,312.906c-6.25,6.25-6.25,16.375,0,22.625s16.375,6.25,22.625,0 L334.871,86.64l-22.625-22.625L63.309,312.906z M357.465,109.25L108.559,358.156c-12.5,12.469-12.469,32.75,0,45.25 c12.5,12.5,32.75,12.563,45.281-0.031l248.906-248.859L357.465,109.25z M153.778,471.219c-7.656-7.656-11.344-17.375-12.719-27.375 c-3.25,0.5-6.531,0.969-9.875,0.969c-17.094,0-33.156-6.688-45.25-18.781c-12.094-12.125-18.75-28.156-18.75-45.25 c0-3.125,0.469-6.156,0.906-9.188c-10.344-1.406-19.906-5.938-27.406-13.438c-0.719-0.719-0.969-1.688-1.625-2.469L-0.004,512 l155.906-39.031C155.215,472.344,154.434,471.875,153.778,471.219z"/>
								</svg>
              </td>
            </tr>
          </tbody>
        </table>
			</div>
		</div>
	)
}
  