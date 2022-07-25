import { useState } from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				<ListItem>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href={'/'}>
							<a>
								<ListItemText primary={'Home'} />
							</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href={'/Contacts'}>
							<a>
								<ListItemText primary={'Contacts'} />
							</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href={'/Posts'}>
							<a>
								<ListItemText primary={'Posts'} />
							</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href={'/api/1'}>
							<a>
								<ListItemText primary={'First comment'} />
							</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton sx={{ textAlign: 'center' }}>
						<Link href={'/api/2'}>
							<a>
								<ListItemText primary={'Second comment'} />
							</a>
						</Link>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						MUI
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<Button sx={{ color: '#fff' }}>
							<Link href={'/'}>
								<a>
									<ListItemText primary={'Home'} sx={{ color: '#fff' }}/>
								</a>
							</Link>
						</Button>
						<Button>
							<Link href={'/Contacts'}>
								<a>
									<ListItemText primary={'Contacts'} sx={{ color: '#fff' }}/>
								</a>
							</Link>
						</Button>
						<Button>
							<Link href={'/Posts'}>
								<a>
									<ListItemText primary={'Posts'} sx={{ color: '#fff' }}/>
								</a>
							</Link>
						</Button>
						<Button>
							<Link href={'/api/1'}>
								<a>
									<ListItemText primary={'First comment'} sx={{ color: '#fff' }}/>
								</a>
							</Link>
						</Button>
						<Button>
							<Link href={'/api/2'}>
								<a>
									<ListItemText primary={'Second comment'} sx={{ color: '#fff' }}/>
								</a>
							</Link>
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box' },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Toolbar />
		</Box>
	);
}