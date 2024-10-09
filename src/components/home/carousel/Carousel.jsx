import image1 from '../../../assets/pwanhomes-logo 1.svg'
import image2 from '../../../assets/Octo5-Logo 1.svg'
import image3 from '../../../assets/revolution 1.svg'
import image4 from '../../../assets/mixtafrica-logo-1 1.svg'
import image5 from '../../../assets/LG-LOGO-SITE 1.svg'
import image6 from '../../../assets/logoww 1.svg'




export function EmblaCarousel() {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-full overflow-hidden'>
				<div className='flex flex-row justify-between items-center space-x-6'>
					<>
						<img
							src={image1}
							alt='Pwanhomes Logo'
							className='h-[100px] w-[140px] object-contain'
						/>
						<img
							src={image2}
							alt='Octo5 Logo'
							className='h-[100px] w-[140px] object-contain'
						/>
						<img
							src={image3}
							alt='Revolution Logo'
							className='h-[100px] w-[130px] object-contain'
						/>
						<img
							src={image4}
							alt='Mixta Africa Logos'
							className='h-[100px] w-[140px] object-contain'
						/>
						<img
							src={image5}
							alt='LG Logo'
							className='h-[100px] w-[140px] object-contain'
						/>
						<img
							src={image6}
							alt='Logo WW'
							className='h-[100px] w-[140px] object-contain'
						/>
					</>
				</div>
			</div>
		</div>
	);
}
