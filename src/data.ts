import { HardHat, Truck, Wrench, ShieldCheck, Clock, MapPin } from 'lucide-react';

export const stats = [
  { id: 1, value: '+15', label: 'Anos de Experiência' },
  { id: 2, value: '30+', label: 'Equipamentos Próprios' },
  { id: 3, value: '100%', label: 'Manutenção Preventiva' },
  { id: 4, value: '24/7', label: 'Suporte Técnico' },
];

export const services = [
  {
    id: 1,
    title: 'Locação de Equipamentos',
    description: 'Frota moderna e revisada para terraplanagem, pavimentação e mineração. Máquinas com telemetria e operadores qualificados opcionais.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1541888087406-eb1e1e18149b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Terraplanagem e Demolição',
    description: 'Execução completa de serviços de movimentação de terra, corte, aterro, compactação e demolição mecanizada com destinação correta de resíduos.',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  }
];

const images = {
  escavadeira: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&q=80&w=800',
  carregadeira: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800',
  retroescavadeira: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800',
  rolo: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  trator: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a5923?auto=format&fit=crop&q=80&w=800',
  motoniveladora: 'https://images.unsplash.com/photo-1541888087406-eb1e1e18149b?auto=format&fit=crop&q=80&w=800',
  caminhao: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
  caminhaoPipa: 'https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&q=80&w=800',
};

export const fleet = [
  { id: '1', name: 'Mini Carregadeira 365', category: 'Pás Carregadeiras', image: 'https://rrmaquinasro.com.br/wp-content/uploads/2023/01/365B-1-scaled-1.webp', readyToDeploy: true, specs: { weight: '1', brand: '-' }, idealFor: 'Trabalhos em espaços confinados e movimentação de materiais leves.' },
  { id: '2', name: 'Escavadeira Case CX220B', category: 'Escavadeiras', image: 'https://img.popagro.com.br/products/product-65e75e4a671ad9678972e6f7/images/e93ef7a0-8b1a-4e76-8275-2864fc54980f/case-cx220b.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Case' }, idealFor: 'Escavação pesada, demolição e movimentação de grandes volumes.' },
  { id: '3', name: 'Escavadeira Hyundai R220LC-95B', category: 'Escavadeiras', image: 'https://img.popagro.com.br/products/product-689253d44021b43aeecc686e/images/fded993f-22d3-4a38-9995-0dfd4bd75b63/hyundai-r220lc-9.jpg', readyToDeploy: true, specs: { weight: '2', brand: 'Hyundai' }, idealFor: 'Obras de infraestrutura, mineração e grandes escavações.' },
  { id: '4', name: 'Escavadeira Hyundai S140', category: 'Escavadeiras', image: 'https://tratorex.net/equipamentos/24J108/1.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Hyundai' }, idealFor: 'Escavação de precisão e trabalhos urbanos.' },
  { id: '5', name: 'Escavadeira Hyundai R150LC-9SB', category: 'Escavadeiras', image: 'https://tratorex.net/equipamentos/25H206/1.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Hyundai' }, idealFor: 'Versatilidade em canteiros de obras médios.' },
  { id: '6', name: 'Escavadeira Komatsu PC160LC-7', category: 'Escavadeiras', image: 'https://ms.sbwebservices.net/photos/2067e464-e6ab-4ab5-adb7-844528b40c15.jpg?w=825&h=502', readyToDeploy: true, specs: { weight: '1', brand: 'Komatsu' }, idealFor: 'Alta produtividade e eficiência em escavação.' },
  { id: '7', name: 'Escavadeira Sany 135', category: 'Escavadeiras', image: 'https://i.ytimg.com/vi/9t8jT6Z21sQ/maxresdefault.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Sany' }, idealFor: 'Trabalhos ágeis em espaços reduzidos.' },
  { id: '8', name: 'Mini Escavadeira Sany 35', category: 'Escavadeiras', image: 'https://multimanuais.com/wp-content/uploads/2024/11/sy35u-O%C2%B4P.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Sany' }, idealFor: 'Pequenas escavações e paisagismo.' },
  { id: '9', name: 'Mini Escavadeira Sany 55', category: 'Escavadeiras', image: 'https://sanyglobal-img.sany.com.cn/product/goods/20200927/SY65C-9--2-081154.jpg?x-oss-process=image/format,webp', readyToDeploy: true, specs: { weight: '2', brand: 'Sany' }, idealFor: 'Obras urbanas e fundações leves.' },
  { id: '10', name: 'Pá Carregadeira Hyundai HL635', category: 'Pás Carregadeiras', image: 'https://www.trucadao.com.br/_next/image?url=https%3A%2F%2Fd2o450bmsmjkde.cloudfront.net%2Fsystem%2Fimagens_anuncios%2Fimagems%2F001%2F644%2F239%2Fnormal%2Fdacd281b1a.jpg&w=2048&q=70', readyToDeploy: true, specs: { weight: '2', brand: 'Hyundai' }, idealFor: 'Carregamento de caminhões e movimentação de agregados.' },
  { id: '11', name: 'Pá Carregadeira New Holland W 170', category: 'Pás Carregadeiras', image: 'https://bamaqmaquinas.com.br/wp-content/uploads/2025/02/luiz-2.jpeg', readyToDeploy: true, specs: { weight: '1', brand: 'New Holland' }, idealFor: 'Alta capacidade de carga e ciclo rápido.' },
  { id: '12', name: 'Pá Carregadeira New Holland W 130', category: 'Pás Carregadeiras', image: 'https://minnera.com.br/wp-content/uploads/2024/07/785436178306596.webp', readyToDeploy: true, specs: { weight: '1', brand: 'New Holland' }, idealFor: 'Operações em pedreiras e grandes canteiros.' },
  { id: '13', name: 'Retroescavadeira New Holland B 95B', category: 'Retroescavadeiras', image: 'https://img.popagro.com.br/products/product-66ad23fe2db0717391d87ff0/images/42ee6ce6-eb10-4dd1-a6c8-9377f3756b56/new-holland-b95b.jpg', readyToDeploy: true, specs: { weight: '2', brand: 'New Holland' }, idealFor: 'Versatilidade total: escavação, carregamento e nivelamento.' },
  { id: '14', name: 'Rolo Compactador Dynapac CA-25', category: 'Rolos Compactadores', image: 'https://img.olx.com.br/images/50/504524538413941.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Dynapac' }, idealFor: 'Compactação de solos granulares e asfalto.' },
  { id: '15', name: 'Rolo Compactador Muller VAP 70', category: 'Rolos Compactadores', image: 'https://tratorex.net/equipamentos/23L206/1.jpg', readyToDeploy: true, specs: { weight: '2', brand: 'Muller' }, idealFor: 'Compactação de bases e sub-bases.' },
  { id: '16', name: 'Trator Esteira D150', category: 'Tratores', image: 'https://bamaqmaquinas.com.br/wp-content/uploads/2024/10/FOTOS-DESTACADAS-POSTS-BLOG-CAMINHOES-52.png', readyToDeploy: true, specs: { weight: '2', brand: '-' }, idealFor: 'Desmatamento, nivelamento pesado e empurre de material.' },
  { id: '17', name: 'Trator John Deere', category: 'Tratores', image: 'https://www.deere.com.br/assets/images/region-3/products/tractors/large/8r-series/8400r/8400r_campo_large_7b13780a09551c33c057712d2c40f25f24c91db8.png', readyToDeploy: true, specs: { weight: '1', brand: 'John Deere' }, idealFor: 'Serviços agrícolas e reboque em obras.' },
  { id: '18', name: 'Patrol Case 865 STD', category: 'Motoniveladoras', image: 'https://tratorex.net/equipamentos/25C103/1.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Case' }, idealFor: 'Nivelamento de precisão e manutenção de vias.' },
  { id: '19', name: 'Patrol New Holland RG170B', category: 'Motoniveladoras', image: 'https://armac.com.br/wordpress/wp-content/uploads/2023/02/armac-new-holland-rg170b-blog-1024x512.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'New Holland' }, idealFor: 'Acabamento fino e conformação de taludes.' },
  { id: '20', name: 'Patrol New Holland RG140B', category: 'Motoniveladoras', image: 'https://i.ytimg.com/vi/tdyfKerffnw/maxresdefault.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'New Holland' }, idealFor: 'Manutenção de estradas de terra e nivelamento geral.' },
  { id: '21', name: 'Caminhão MB 1935', category: 'Caminhões', image: 'https://i.ytimg.com/vi/TXD0zs-2OJA/maxresdefault.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Mercedes-Benz' }, idealFor: 'Transporte pesado e logística de canteiro.' },
  { id: '22', name: 'Caminhão MB 1113 (Azul) Truck', category: 'Caminhões', image: 'https://d36qmzp7jiean8.cloudfront.net/cliente_018539/veiculos/1331526_202511261538112252122_big.webp', readyToDeploy: true, specs: { weight: '1', brand: 'Mercedes-Benz' }, idealFor: 'Transporte de materiais diversos e apoio.' },
  { id: '23', name: 'Caminhão MB 1938', category: 'Caminhões', image: 'https://d36qmzp7jiean8.cloudfront.net/cliente_000423/veiculos/1329444_202511172029524145249_big.webp', readyToDeploy: true, specs: { weight: '1', brand: 'Mercedes-Benz' }, idealFor: 'Tração de carretas e pranchas pesadas.' },
  { id: '24', name: 'Caminhão Pipa Amarelo', category: 'Caminhões Pipa', image: 'https://www.pmvc.ba.gov.br/wp-content/uploads/Carros-Pipa2-e1718743439525.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Mercedes-Benz' }, idealFor: 'Controle de poeira e umectação de vias.' },
  { id: '25', name: 'Caminhão Prancha 2 Cargo 2428', category: 'Caminhões Prancha', image: 'https://tratorex.net/equipamentos/24F210/1.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Ford' }, idealFor: 'Transporte e mobilização de equipamentos pesados.' },
  { id: '26', name: 'Caminhão Pipa 2214', category: 'Caminhões Pipa', image: 'https://evermaq.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-30-at-11.58.20-1.jpeg', readyToDeploy: true, specs: { weight: '1', brand: 'Mercedes-Benz' }, idealFor: 'Abastecimento de água em frentes de serviço.' },
  { id: '27', name: 'Caminhão Pipa Scania 360', category: 'Caminhões Pipa', image: 'https://img.mfrural.com.br/api/image?url=https://s3.amazonaws.com/mfrural-produtos-us/69887-837575-80658663-scania-113-360-tracado-caminhao-pipa.webp&width=767&height=521&mode=4', readyToDeploy: true, specs: { weight: '1', brand: 'Scania' }, idealFor: 'Grande capacidade de transporte de água.' },
  { id: '28', name: 'Caminhão Pipa Laranja 2324', category: 'Caminhões Pipa', image: 'https://jclocacoesdemaquinas.com.br/wp-content/uploads/2025/04/quanto-custa-um-caminhao-pipa%E2%80%8B.jpg', readyToDeploy: true, specs: { weight: '1', brand: 'Mercedes-Benz' }, idealFor: 'Apoio à compactação e irrigação.' },
  { id: '29', name: 'Scania 113 Branco', category: 'Caminhões', image: 'https://i.ytimg.com/vi/bXFBcALkiRE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCRP9FFLAeZSfg7ydZPGWeLikC45g', readyToDeploy: true, specs: { weight: '1', brand: 'Scania' }, idealFor: 'Transporte rodoviário e tração.' },
  { id: '30', name: 'Scania 124 Branco', category: 'Caminhões', image: 'https://s3.ecompletocarros.dev/images/lojas/165/veiculos/56092/veiculoInfoVeiculoImagesMobile/vehicle_image_1618253845_6561c319cc3d8827af870a03c9a5aa9a.jpeg', readyToDeploy: true, specs: { weight: '1', brand: 'Scania' }, idealFor: 'Alta potência para transporte de cargas indivisíveis.' },
];
