import image1 from '../../../assets/Property Hive/pwanhomes-logo 1.png'
import image2 from '../../../assets/Property Hive/Octo5-Logo 1.png'
import image3 from '../../../assets/Property Hive/revolution 1.png'
import image4 from '../../../assets/Property Hive/mixtafrica-logo-1 1.png'
import image5 from '../../../assets/Property Hive/LG-LOGO-SITE 1.png'
import image6 from '../../../assets/Property Hive/logoww 1.png'




export function EmblaCarousel() {
	return (
		<div className='w-full overflow-hidden'>
			<div className='w-full overflow-hidden'>
				<div className='flex flex-row justify-between items-center space-x-6'>
					<>
						<img
							src={image1}
							alt='Pwanhomes Logo'
							className='h-[37px] w-[120px]'
						/>
						<img
							src={image2}
							alt='Octo5 Logo'
							className='h-[100px] w-auto'
						/>
						<img
							src={image3}
							alt='Revolution Logo'
							className='h-[68px] w-[130px]'
						/>
						<img
							src={image4}
							alt='Mixta Africa Logos'
							className='h-[70px] w-[140px]'
						/>
						<img
							src={image5}
							alt='LG Logo'
							className='h-[89px] w-[140px]'
						/>
						<img
							src={image6}
							alt='Logo WW'
							className='h-[47px] w-[120px]'
						/>
					</>
				</div>
			</div>
		</div>
	);
}
