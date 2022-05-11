function SiteTask() {
	return (
		<div className='site-task'>
			<div className='site-task__left'>
				<div className='site-task__left-heading'>
					<h3 className='site-task__left-title'>Unresolved tickets</h3>
					<a className='site-task__left-link' href='#link'>
						View details
					</a>
				</div>
				<p className='site-task__left-text'>
					Group:
					<strong>Support</strong>
				</p>
				<ul className='site-task__left-list'>
					<li className='site-task__left-item'>
						<p className='site-task__left-item-text'>
							Waiting on Feature Request
						</p>
						<span className='site-task__left-item-num'>4238</span>
					</li>
					<li className='site-task__left-item'>
						<p className='site-task__left-item-text'>
							Awaiting Customer Response
						</p>
						<span className='site-task__left-item-num'>1005</span>
					</li>
					<li className='site-task__left-item'>
						<p className='site-task__left-item-text'>Awaiting Developer Fix</p>
						<span className='site-task__left-item-num'>914</span>
					</li>
					<li className='site-task__left-item'>
						<p className='site-task__left-item-text'>Pending</p>
						<span className='site-task__left-item-num'>281</span>
					</li>
				</ul>
			</div>

			<div className='site-task__right'>
				<div className='site-task__left-heading'>
					<h3 className='site-task__left-title'>Tasks</h3>
					<a className='site-task__left-link' href='#link'>
						View details
					</a>
				</div>
				<p className='site-task__left-text'>Today</p>
				<ul className='site-task__left-list'>
					<li className='site-task__left-item'>
						<p className='site-task__left-item-text--activ'>Create new task</p>
						<button className='btn_add'>+</button>
					</li>
					<li className='site-task__left-item'>
						<div className='site-task_chesk'>
							<div className='round'>
								<input type='checkbox' id='checkbox' />
								<label htmlFor='checkbox'></label>
							</div>
							<p className='site-task__left-item-text'>Finish ticket update</p>
						</div>
						<button className='btn_urgent'>Urgent</button>
					</li>
					<li className='site-task__left-item'>
						<div className='site-task_chesk'>
							<div className='round'>
								<input type='checkbox' id='checkbbox' />
								<label htmlFor='checkbbox'></label>
							</div>
							<p className='site-task__left-item-text'>
								Create new ticket example
							</p>
						</div>
						<button className='btn_new'>New</button>
					</li>
					<li className='site-task__left-item'>
						<div className='site-task_chesk'>
							<div className="round">
								<input type='checkbox' id='checkbbbox' />
								<label htmlFor='checkbbbox'></label>
							</div>
							<p className='site-task__left-item-text'>Update ticket report</p>
						</div>
						<button className='btn_default'>Default</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default SiteTask;
