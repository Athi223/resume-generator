import React, { useState } from 'react'
import { HouseDoorFill, Linkedin, Github, Globe2, Mailbox2, PhoneFill } from 'react-bootstrap-icons'
// import halfmoon from 'halfmoon/js/halfmoon'
import 'halfmoon/css/halfmoon.css'

export default function App() {
	const [ includePhoto, setIncludePhoto ] = useState(false)
	const [ name, setName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ phone, setPhone ] = useState('')
	const [ address, setAddress ] = useState('')
	const [ github, setGithub ] = useState('')
	const [ linkedin, setLinkedin ] = useState('')
	const [ website, setWebsite ] = useState('')
	const [ education, setEducation ] = useState([])
	const [ workExperience, setWorkExperience ] = useState([])
	const [ certifications, setCertifications ] = useState([])
	const handleEducation = (e, index, flag) => {					// flag = true for title, false for content
		let _education = [ ...education ]
		if(flag) {
			_education[index].title = e.target.value
		} else {
			_education[index].content = e.target.value
		}
		setEducation(_education)
	}
	const handleWorkExperience = (e, index, flag) => {					// flag = true for title, false for content
		let _workExperience = [ ...workExperience ]
		if(flag) {
			_workExperience[index].title = e.target.value
		} else {
			_workExperience[index].content = e.target.value
		}
		setWorkExperience(_workExperience)
	}
	const handleCertifications = (e, index, flag) => {					// flag = true for title, false for content
		let _certifications = [ ...certifications ]
		if(flag) {
			_certifications[index].title = e.target.value
		} else {
			_certifications[index].content = e.target.value
		}
		setCertifications(_certifications)
	}
	return (
		// Page wrapper start
		<div className="page-wrapper">

			{/* Content wrapper start */}
			<div className="content-wrapper">
			{/* Add your page's main content here */}
				<div className="row h-full">
					<div className="col-12 col-md-6 bg-dark">
						<div className="card">
							<div className="input-group mb-20">
								<div className="input-group-prepend">
									<span className="input-group-text">Name</span>
								</div>
								<input type="text" className="form-control" placeholder="Your Name" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
							</div>
							<textarea value={address} className="form-control mb-20" onChange={(e) => setAddress(e.target.value)} placeholder="Address"></textarea>
							<div className="form-row row-eq-spacing mb-20">
								<div className="col-8">
									<div className="input-group">
										<div className="custom-switch mr-20">
											<input type="checkbox" id="includePhoto" onChange={(e) => setIncludePhoto(e.target.checked)} />
											<label htmlFor="includePhoto">Include Photo?</label>
										</div>
										{includePhoto ? <div className="custom-file">
											<input type="file" id="photo" />
											<label htmlFor="photo">Choose a photo</label>
										</div> : null}
									</div>
								</div>
								<div className="col-4">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Phone</span>
										</div>
										<input type="tel" value={phone} className="form-control" onChange={(e) => setPhone(e.target.value)}/>
									</div>
								</div>
							</div>
							<div className="form-row row-eq-spacing mb-20">
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Email</span>
										</div>
										<input type="text" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)}/>
									</div>
								</div>
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">LinkedIn</span>
										</div>
										<input type="text" value={linkedin} className="form-control" onChange={(e) => setLinkedin(e.target.value)}/>
									</div>
								</div>
							</div>
							<div className="form-row row-eq-spacing mb-20">
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Github</span>
										</div>
										<input type="text" value={github} className="form-control" onChange={(e) => setGithub(e.target.value)}/>
									</div>
								</div>
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">Website</span>
										</div>
										<input type="text" value={website} className="form-control" onChange={(e) => setWebsite(e.target.value)}/>
									</div>
								</div>
							</div>
							<hr className="bg-dark-light" />
							<h4 className="d-inline-block mr-20">Education</h4>
							<button className="btn btn-primary d-inline-block" onClick={() => setEducation(prevstate => prevstate.concat({ title: '', content: '' }))}>Add Educational Qualification</button>
							<div>
								{education.map((edu, index) => <div key={index} className="input-group mb-20">
									<input type="text" className="form-control" placeholder="Title" value={edu.title} onChange={(e) => handleEducation(e, index, true)} />
									<input type="text" className="form-control" placeholder="Content" value={edu.content} onChange={(e) => handleEducation(e, index, false)} />
								</div>)}
							</div>
							<hr className="bg-dark-light" />
							<h4 className="d-inline-block mr-20">Work Experience</h4>
							<button className="btn btn-primary d-inline-block" onClick={() => setWorkExperience(prevstate => prevstate.concat({ title: '', content: '' }))}>Add Work Experience</button>
							<div>
								{workExperience.map((work, index) => <div key={index} className="input-group mb-20">
									<input type="text" className="form-control" placeholder="Title" value={work.title} onChange={(e) => handleWorkExperience(e, index, true)} />
									<input type="text" className="form-control" placeholder="Content" value={work.content} onChange={(e) => handleWorkExperience(e, index, false)} />
								</div>)}
							</div>
							<hr className="bg-dark-light" />
							<h4 className="d-inline-block mr-20">Certifications</h4>
							<button className="btn btn-primary d-inline-block" onClick={() => setCertifications(prevstate => prevstate.concat({ title: '', content: '' }))}>Add Certifications</button>
							<div>
								{certifications.map((cert, index) => <div key={index} className="input-group mb-20">
									<input type="text" className="form-control" placeholder="Title" value={cert.title} onChange={(e) => handleCertifications(e, index, true)} />
									<input type="text" className="form-control" placeholder="Content" value={cert.content} onChange={(e) => handleCertifications(e, index, false)} />
								</div>)}
							</div>
							<hr className="bg-dark-light" />
							<h4 className="d-inline-block mr-20">Miscellaneous</h4>
							<button className="btn btn-primary d-inline-block">Add Miscellaneous Content</button>
						</div>
					</div>
					<div className="col-12 col-md-6 bg-light p-20">
						<div className="h-200 mb-20">
							<div className="d-inline=block float-left">
								<h1>{name}</h1>
								<p className="text-primary font-size-16">{address ? <span style={{ whiteSpace: "pre-wrap" }}><HouseDoorFill className="mr-5" /> {address}</span> : null}</p>
							</div>
							<div className="d-inline-block float-right text-right">
								<p className="text-primary font-size-16">{email ? <span>{email} <Mailbox2 /></span> : null}</p>
								<p className="text-primary font-size-16">{phone ? <span>{phone} <PhoneFill /></span> : null}</p>
								<p className="text-primary font-size-16">{linkedin ? <span>{linkedin} <Linkedin /></span> : null}</p>
								<p className="text-primary font-size-16">{github ? <span>{github} <Github /></span> : null}</p>
								<p className="text-primary font-size-16">{website ? <span>{website} <Globe2 /></span> : null} </p>
							</div>
						</div>
						<div className="mb-20">
							{education.length > 0 ? <h3 className="text-primary text-decoration-underline">Education</h3> : null}
							<dl>
								{education.map((edu, index) => <div className="mb-10" key={index}>
									<dt className="font-size-22 font-weight-semi-bold">{edu.title}</dt>
									<dd className="font-size-16">{edu.content}</dd>
								</div>)}
							</dl>
						</div>
						<div className="mb-20">
							{workExperience.length > 0 ? <h3 className="text-primary text-decoration-underline">Work Experience</h3> : null}
							<dl>
								{workExperience.map((work, index) => <div className="mb-10" key={index}>
									<dt className="font-size-22 font-weight-semi-bold">{work.title}</dt>
									<dd className="font-size-16">{work.content}</dd>
								</div>)}
							</dl>
						</div>
						<div className="mb-20">
							{certifications.length > 0 ? <h3 className="text-primary text-decoration-underline">Certifications</h3> : null}
							<dl>
								{certifications.map((cert, index) => <div className="mb-10" key={index}>
									<dt className="font-size-22 font-weight-semi-bold">{cert.title}</dt>
									<dd className="font-size-16">{cert.content}</dd>
								</div>)}
							</dl>
						</div>
					</div>
				</div>
			</div>
			{/* Content wrapper end */}

		</div>
		//Page wrapper end
	)
}


