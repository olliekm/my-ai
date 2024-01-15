"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {

  const [openSongs, setOpenSongs] = useState([false, false, false, false, false])

  function toggleSong(idx){
    setOpenSongs(prevOpenSongs => {
      const newOpenSongs = [...prevOpenSongs];
      newOpenSongs[idx] = !newOpenSongs[idx];
      return newOpenSongs;
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-stone-900">
      <div className="lg:w-3/5 w-[90%] min-h-screen">
        <div className="w-full h-auto p-8 justify-between flex">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[url('https://i.imgur.com/jpCe686.png')] rounded-full shadow-xl bg-cover border-2"></div>
            <div className="flex flex-col text-white">
              <h1 className='text-xl font-bold'>Oliver Kwun-Morfitt</h1>
              <small>Check out my AI stuff</small>  
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a href="https://olliekm.com" target="_blank" rel="noopener noreferrer" className='text-white underline px-4'>
              Check out my site!
            </a>
            <a href="https://olliekm.notion.site/Learning-AI-b389e1258f3e4147aad86597fc3d74f1?pvs=4" className='px-6 py-4 bg-white rounded-2xl font-semibold hover:underline' target="_blank" rel="noopener noreferrer">
              How I made it
            </a>
          </div>
        </div>
        <div className="h-auto w-full text-white">
          <div className="w-full min-h-96 h-auto bg-stone-950 rounded-xl flex p-8">
            <div className="h-80 w-80 shrink-0 rounded-xl bg-center bg-cover bg-[url('/image.webp')]"></div>
            <div className="flex flex-col w-full">
              <div className="px-4 space-y-4">
                <h1 className='text-2xl'>Taylor Swfit | <b>AI</b>-lbum</h1>
                <div onClick={() => toggleSong(0)} className="w-full h-auto p-2 rounded-md bg-stone-800">
                  Song #1
                  <div className="">
                    {
                      openSongs[0] && 
                      <div className='prose w-80 '>{`
                        Oh, oh
                        Roh, I doh-oh
                        You're n't loooone o gryoury gonnet, ws all fir the I asved now, thyouyre be sout
                        Ifought now, this his (wey)
                        You tould me-ah-a-a, cah)
                        You riye wight wring you dour ight
                        La drinds the won you're the to go
                        Swit's to
                        Evew 2n likew tho all crup
                        We's loosty lovery 2whou're the withas ild wove woll whof"
                        
                        [Chorus]
                        Now, it's be fut newho yourerss gound
                        Dar mid just maden tim throwned, your af you
                        Light you're lree to byou me
                        Tat, back like, I a you my scramme
                        Every malo nig like[Bridge]
                        And I to came mirke ing
                        Ce caft fup when you bepptior shen ame, I'd beverrd you
                        It go, my, to whoold you're bay
                        And I sones air drerleve, I never soome
                        Try seames ways it's and you loveer knows
                        I I whon you't wairked ifire
                        
                        And I don't I I I don't nevery soet a prings
                        
                        [Verse 2]
                        I I won she reechon nou, I wand?
                        And bay quide, I fomed that
                        Du's I'm toon lokes`}
                        </div>
                    }
                  </div>
                </div>
                <div onClick={() => toggleSong(1)} className="w-full h-auto p-2 rounded-md bg-stone-800">
                  Song #2
                  <div className="prose">
                    {
                      openSongs[1] && 
                      <div className='prose w-80 '>{`
                      [Chorus]
                      Oh-oh
                      It's neel2o, I'm I con get walle werd wa's runthad
                      You pances aty you
                      You mxo stood have oulight ike[Outridghtro]
                      We rethe win as inat, in't mpengy that ought bend
                      It I'm ave dlight ad the o you rote
                      Thit's ne ut's tall athe at thing theneatbll at I knike I hevert
                      But puer eat ago gur eloonever alr thind mome
                      She warss sanessias
                      Ye you're sowaing lllin, "treess, rabessss
                      
                      Youyr so find eve thike, forys uyou'te emneverys
                      For bryoorges?
                      And shing as band you're iflang lit thiter tinep
                      Never hour rome at mepensss
                      And I nevever iss tar allver
                      
                      But's noor inmes therr your aldeylone art, ea ay
                      [Chorus]
                      'Cause you're Cakn I hasery ase sins
                      Bie and lik I bevever mack eack, was arnd heand the and I thernt
                      You'in' e to che I I memy
                      I gon the bey rie momegar acand marust my
                      Bu wand fare I'm ware Corn my wugart arells you
                      I heveminght igong wald my ouls beliood
                      And I I'm wand artt eyou
                      The ro frend wheld bur ofte or beayin win
                      You ight it and cowand
                      Ed oricht I yrealls, right you reame
                      To pright the arlll lotey u co
                      Andse asearnd sofeand I mels you at one, me
                      And nevelerys don't iner your talutck has thit sours
                      Sake ime I'd I stait
                      I'm m whas areress, tat was dreay
                      Sofun't you to hit t schosnse wit
                      Forewe you wn aCo stagos and welankbs fand and
                      `}
                        </div>
                    }

                  </div>
                </div>
                <div onClick={() => toggleSong(2)} className="w-full h-auto p-2 rounded-md bg-stone-800">
                  Song #3
                  <div className="prose">
                    {
                      openSongs[2] && 
                      <div className='prose w-80 '>{`             
                      [Pyorut 2]
                      For's once to forete like ck to thidn isd courf
                      But mind fame Ind awaldet ucked
                      But froreating imen ight' icht
                      'Cause fot merer, and und and arad ownd
                      Ever (Nownn't ink po ewtact And 'my macke are agort lof taime tiomy styou tacme
                      [Verse 2]
                      's siwe you reealll?
                      CaLigie thaing, kit you ofered bade
                      It wad you'rk light wet tonnsseer ad of wort
                      And I scook own you mes kannm you fomes feellee and the seeed that ely

                      Bumbond meing mare, this alll and be I'm walk, knows now
                      I chould kne owaind I the she sand

                      Ulme on that bay pa wsttould she sde
                      Diss amayle it bell draysst rearee

                      [Pridge]
                      Thin4t was me drownt areling twit
                      1]
                      Lit's him we ont ware the lace is
                      I'd ithe tong you's al agi're you nd sCark
                      We herce the in stbr and wars

                      You're cannd my the're sorge rins now
                      Ret crey neasg ow thepls, shes"
                      You and medstste you a lik the bat shamaul nt't I sand you't ugondss
                      You lon't thip ome this this "Whe's sare you, mys, and thin's a to I the you's bruned earte
                      My, know whaty's fake and
                      Be sJay, I'd getaidet to or ir ga lakn I dofowate

                      [Chorus]
                      I goft toulld if saver ghe you

                      Bridg lis "my"Fikig thin kever the enewandsing ithen' nof theren hays youred
                      And lon a fis, cand I'm mrtt ithes of age, ducst maid
                      That's it mat's ane I puest cugond ging
                      And I thay dat tay dof cat'son
                      But wa the wo you chaing rat aulr kid
                      Wand dond ((Ooh)), day'bed)
                      It'm the Inotlo wonn't dof wos ronna I never you, whount I don't you pronna ink you
                      But be don't I shene thit a rlis tud tre cow houlere
                      You're we youre I thand ow
                      I that this lat I wires shak oun gdemst

                      I'Cause fexcrle thert you and I don't hewe that on lo my theelo t
                      And you the want protige o whay fe dat it so tare and
                      I the mack up I hearllt touss dof acrlted wirght the shat o parlod so be
                      AAnd 3]
                      I nefet ling, act you thould tom light the pand fack
                      I tree my that of, qup wcatt ith y
                      You meat cove exp dmare whit sthon you mares
                      Oon't the repickers che lomind therke thais
                      It Codot it's think you feave it be
                      He it's's gickere I ta I mene ade

                      He'se you skn the lyou, stally, my

                      I kn't wa in you, thart mery beay`}
                        </div>
                    }

                  </div>
                </div>
                <div onClick={() => toggleSong(3)} className="w-full h-auto p-2 rounded-md bg-stone-800">
                  Song #4
                  <div className="prose">
                    {
                      openSongs[3] && 
                      <div className='prose w-80 '>{`
                      [Bridge]
                      Love-mby, um goullst like lover hereasame, y
                      Everyboh, outry just (Yeah)
                      Tave ond beat ill rid)
                      The fis pin thes
                      Theren my he mear theat nd beacket gitt hight ame
                      Goke you mis me, sharkd 'Cause d pit fiseend ing)
                      It you isere (Red)
                      [Chorus]
                      I'd the fhat thay, hend I'd lelike aghtacke
                      Ml stime ony thars
                      (You're ond of cean'teld beat thern the and And I'm way you're you're I igong nt now
                      And this cas I the I teelo a you
                      Oh, prit meaght y dood wond donlys
                      Ooh-ah, an't you never your (Oh)
                      Don't nevere rin belieng I you it shreme, Just fitheren
                      But't im you're anot rureen you, mer wherans
                      4t now pre, gunrnt welit tho you ald nowen
                      Oh-eah, I onever you're wand it you
                      I fit nca fthing te your in you, mealdinythe now I hery`}
                        </div>
                    }

                  </div>
                </div>
                <div onClick={() => toggleSong(4)} className="w-full h-auto p-2 rounded-md bg-stone-800">
                  Song #5
                  <div className="prose">
                    {
                      openSongs[4] && 
                      <div className='prose w-80 '>{`
                      I sa sing bued, I feertings you'l know bect sandyry
                      I'm I gettttereantt pin you wou, it handy lol do go
                      
                      [Chorus]
                      Mming phaup, to winck awith uplugnn I thot
                      This t fle buss e kspince, I maneang
                      Thelller o chere is wo mat's sut yeraing you whonk irgh oliked now
                      And donn't you I'vee ired cols you
                      But wo you're fit ancyou tho
                      Buteilll and on'tee yourery the mhabe
                      Read, ithing whoutw my hou, it you'verew you lit hong atd tprapy anit of wit I'm sthatime
                      
                      Thimmeng it's henup aght, prow
                      Gon'm mils did sto a wom tand
                      And atalk 'so I arut hack stight
                      It's ling the ove alde's the to t-pay
                      
                      [Ous]
                      [Canday it't I you
                      I smdrry heart geverys meamening you looved thing herse
                      Sand Idor maht hat charte
                      Donceve win't I ceand it you the's goo the thas ankit
                      xche an thand ma it, you hen't neverew2]
                      And the wate same
                      
                      [Chors]
                      I'm stif if wot yeald you uld and epated
                      And you're the plee ha it's skilong iof you
                      And the to the chatGut yourk tul she thildd is now
                      (Outke fofor ling you ind the bebate and wand ag
                      `}
                        </div>
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
